const { students } = require("../data/db");
const { createStudent } = require("../models/studentModel");

// GET ALL
exports.getAllStudents = (req, res) => {
  res.json({
    status: "success",
    count: students.length,
    data: students
  });
};

// GET ONE
exports.getStudent = (req, res) => {
  const student = students.find(s => s.id === req.params.id);

  if (!student) {
    return res.status(404).json({
      status: "error",
      message: "Student not found"
    });
  }

  res.json({ status: "success", data: student });
};

// POST
exports.addStudent = (req, res) => {
  const { name, branch, year } = req.body;

  if (!name || !branch || !year) {
    return res.status(400).json({
      status: "error",
      message: "All fields required"
    });
  }

  const newStudent = createStudent({ name, branch, year });
  students.push(newStudent);

  res.status(201).json({
    status: "success",
    data: newStudent
  });
};

// PATCH
exports.updateStudent = (req, res) => {
  const student = students.find(s => s.id === req.params.id);

  if (!student) {
    return res.status(404).json({
      status: "error",
      message: "Student not found"
    });
  }

  const { name, branch, year } = req.body;

  if (name) student.name = name;
  if (branch) student.branch = branch;
  if (year) student.year = parseInt(year);

  student.updatedAt = new Date().toISOString();

  res.json({ status: "success", data: student });
};

// DELETE
exports.deleteStudent = (req, res) => {
  const index = students.findIndex(s => s.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "Student not found"
    });
  }

  students.splice(index, 1);

  res.status(204).json({
    status: "success",
    message: "Deleted"
  });
};