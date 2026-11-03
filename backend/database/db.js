const Database = require("better-sqlite3");

const db = new Database("database/campusconnect.db");

db.pragma("foreign_keys = ON");

console.log("CampusConnect database connected successfully!");

module.exports = db;