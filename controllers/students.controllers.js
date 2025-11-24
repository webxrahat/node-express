import { Students } from "../models/students.model.js";

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
    const { first_name } = req.body || {};
    if (!first_name)
      return res.status(400).json({ message: "All fields are required" });
    const student = await Students.create(req.body);

    res.status(201).json(student);
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
    res.status(200).json({ message: `student is deleted` });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getStudents, saveStudent, getStudent, updateStudent, deleteStudent };
