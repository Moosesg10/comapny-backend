import { pool } from "../db.js";

export const getAdmin = async (req, res) => {
  const user = req.params.users;
  try {
    const get = await pool.query("SELECT * FROM admin WHERE name = ?", [user]);
    const result = get[0];
    if (result.length <= 0)
      return res.status(404).json({ message: "users not Found " });
    res.json(result);
  } catch (error) {
    console.log(error)
  }
};

export const getAdmins = async (req, res) => {
  try {
    const get = await pool.query("SELECT * FROM admin ");
    const result = get[0];
    if (result.length <= 0)
      return res.status(404).json({ message: "users not Found " });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createAdmin = async (req, res) => {
  const { id, name, password, admin, rol } = req.body;
  const corrreo = "default@gamil.com";

  try {
    const result = await pool.query(
      "INSERT INTO admin (id , name,  password , admin, rol) VALUES (? , ? , ? , ?, ?)",
      [id, name, password, admin, rol]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    const [result] = await pool.query("DELETE FROM admin WHERE id = ?", [id]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const updateOneDataEmployeeAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, salary, rol } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) , rol = IFNULL(?, rol) WHERE id = ?",
      [name, salary, rol, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [row] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
