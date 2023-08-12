import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM employee");
    res.json(row);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployee = async (req, res) => {
  const ID = req.params.id;
  try {
    const [row] = await pool.query("SELECT * FROM employee WHERE id = ?", [ID]);

    if (row.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const postEmployess = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [row] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (? , ?)",
      [name, salary]
    );

    res.send({
      id: row.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployees = async (req, res) => {
  const ID = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      ID,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = ? , salary = ? WHERE id = ?",
      [name, salary, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [row] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateOneDataEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [row] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
