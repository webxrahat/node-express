import {
  deleteStudent,
  getStudent,
  getStudents,
  saveStudent,
  updateStudent,
} from "../controllers/students.controllers.js";
import express from "express";
const router = express.Router();

// Get all students.routess
router.route("/").get(getStudents).post(saveStudent);

// Get students.routes By ID
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

export default router;
