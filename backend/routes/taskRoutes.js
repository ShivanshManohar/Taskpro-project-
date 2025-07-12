import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);         // GET /api/tasks
router.post("/", createTask);      // ✅ POST /api/tasks
router.put("/:id", updateTask);    // PUT /api/tasks/:id
router.delete("/:id", deleteTask); // DELETE /api/tasks/:id

export default router;
