import {
  deleteStudent,
  getStudent,
  getStudents,
  saveStudent,
  updateStudent,
} from "../controllers/students.controllers.js";
import express from "express";
import { upload } from "../utils/uploadFiles.js";
const router = express.Router();

// Get all students.routess
router
  .route("/")
  .get(getStudents)
  .post(upload.single("profile_pic"), saveStudent);

// Get students.routes By ID
router
  .route("/:id")
  .get(getStudent)
  .put(upload.single("profile_pic"), updateStudent)
  .delete(deleteStudent);

export default router;
