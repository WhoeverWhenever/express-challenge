const express = require("express");
const studentsController = require("../controllers/students.ctrl");
const studentStats = require("../mocks/student-stats");

const router = express.Router();

router.get("/", studentsController.getAllStudents(studentStats));

router.get("/worstHomework", studentsController.getWorstHomeworkStudent(studentStats));

module.exports = router;