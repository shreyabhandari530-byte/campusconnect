
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./database/db");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("CampusConnect Backend is Running!");
});

// Database connection test
app.get("/api/test-db", (req, res) => {
    try {
        const tables = db.prepare(
            "SELECT name FROM sqlite_master WHERE type='table'"
        ).all();

        res.json({
            message: "Database connected successfully!",
            tables: tables
        });
    } catch (error) {
        res.status(500).json({
            message: "Database connection failed",
            error: error.message
        });
    }
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
