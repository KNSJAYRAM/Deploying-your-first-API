const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use("/api/students", studentRoutes);

app.get("/", (req,res) => {
    res.send("Student API is running! Use /api/students");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
