const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const dataFile = path.join(__dirname, "../data/students.json");


const readStudents = () => {
  try {
    const data = fs.readFileSync(dataFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};


const saveStudents = (students) => {
  fs.writeFileSync(dataFile, JSON.stringify(students, null, 2));
};


router.post("/", (req, res) => {
  const { name, age, course, year, status } = req.body;


  if (!name || !course || !year) {
    return res.status(400).json({ error: "Name, course, and year are required." });
  }
  if (typeof age !== "number" || age <= 0) {
    return res.status(400).json({ error: "Age must be a number greater than 0." });
  }

  const newStudent = {
    id: uuidv4(),
    name,
    age,
    course,
    year,
    status: status || "active",
  };

  const students = readStudents();
  students.push(newStudent);
  saveStudents(students);

  res.status(201).json(newStudent);
});


router.get("/", (req, res) => {
  try {
    const students = readStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Could not read student data." });
  }
});

module.exports = router;
