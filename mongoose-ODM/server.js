const express = require("express");

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

const app = express();


// Middleware
app.use(express.json());


// Database Connection
connectDB();


// Routes
app.use("/api/students", studentRoutes);


// Home Route
app.get("/", (req, res) => {
  res.send("Student API Running");
});


// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});