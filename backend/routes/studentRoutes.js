const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.post("/", addStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;