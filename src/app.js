const resultRoutes = require("./routes/resultRoutes");
const statusRoutes = require("./routes/statusRoutes");
const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/results", resultRoutes);
// Home Route
app.get("/", (req, res) => {
    res.send("Backend + AI Engineering Take-Home Assignment API");
});

module.exports = app;