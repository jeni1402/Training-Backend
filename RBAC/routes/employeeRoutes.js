import express from "express";

import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";

import {
    getEmployees,
    deleteEmployee,
    applyLeave
} from "../controllers/employeeController.js";

const router = express.Router();

router.get(
    "/employees",
    authenticate,
    authorize("admin", "hr"),
    getEmployees
);

router.delete(
    "/employees/:id",
    authenticate,
    authorize("admin"),
    deleteEmployee
);

router.post(
    "/leave",
    authenticate,
    authorize("employee", "hr", "admin"),
    applyLeave
);

export default router;