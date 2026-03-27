const express = require("express");
const cors = require("cors");
const path = require("path");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// ✅ API routes
app.use("/students", studentRoutes);

// ✅ Root route → serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;