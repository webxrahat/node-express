import { Students } from "../models/students.model.js";
import path from "path";
import fs from "fs";

const getStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveStudent = async (req, res) => {
  try {
    const student = new Students(req.body);

    if (req.file) {
      student.profile_pic = req.file.filename;
    }
    const saveStudent = await student.save();

    res.status(201).json(saveStudent);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateStudent = async (req, res) => {
  const student = await Students.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!student) return res.status(404).json({ message: "Student not found" });

  res.status(200).json(student);
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    if (student.profile_pic) {
      const filePath = path.join("uploads/", student.profile_pic);
      fs.unlink(filePath, (err) => {
        if (err) return console.log("failed to delete", err);
      });
    }

    res.status(200).json({ message: `student is deleted` });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getStudents, saveStudent, getStudent, updateStudent, deleteStudent };
