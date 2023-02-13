const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "farzan1256**",
  database: "test",
});

// app.use(express.json())

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?);";
  const values = [
    "created from new project",
    "desc from new project",
    "image from new project",
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("added new");
  });
});

app.listen(3000, () => {
  console.log("connected to back-end");
});
