const mysql = require('mysql');
const { CONFIG } = require("./config/config.js");

const connection = mysql.createPool({
  host: CONFIG.development.db.DB_IP,
  user: CONFIG.development.db.DB_USER ,// Replace with your MySQL username
  password: CONFIG.development.db.DB_PASSWORD , // Replace with your MySQL password
  database: CONFIG.development.db.DB  // Replace with your database name
});

module.exports = connection