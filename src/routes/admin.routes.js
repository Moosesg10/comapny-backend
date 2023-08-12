import { Router } from "express";
import { createAdmin, deleteAdmin, getAdmin, getAdmins, updateOneDataEmployeeAdmin } from "../controllers/admin.controllers.js";


const router = Router()

router.get('/admin/:users', getAdmin)
router.get('/admin', getAdmins)
router.post('/admin', createAdmin)
router.delete('/admin/:id', deleteAdmin)
router.patch('/admin/:id', updateOneDataEmployeeAdmin)


export default router