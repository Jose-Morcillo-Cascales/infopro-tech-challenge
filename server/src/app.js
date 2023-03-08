const connection = require("./db");
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors=require("cors");
app.use(helmet());
app.use(cors());


app.get("/users", (req, res) => {
  const query = "SELECT * FROM Usuarios";
  

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL database", err);
      return;
    }

    res.status(200).send({ status: true, data: results });
    console.log("Data fetched successfully", results);
  });
});
module.exports = app;