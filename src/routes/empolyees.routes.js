import { Router } from "express";
import {
  deleteEmployees,
  getEmployee,
  getEmployees,
  postEmployess,
  updateEmployee,
  updateOneDataEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/empleados", getEmployees);

router.get("/empleados/:id", getEmployee);

router.post("/empleados", postEmployess);

router.put("/empleados/:id", updateEmployee);

router.patch("/empleados/:id", updateOneDataEmployee);

router.delete("/empleados/:id", deleteEmployees);

export default router;
