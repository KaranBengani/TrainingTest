var express = require("express");
const { Client } = require("pg");
var path = require("path");
const port = 3000;
var cors = require("cors");
const connectionString =
  "postgres://postgres:Finserv@2023@localhost:5432/testDb";

const client = new Client({
  connectionString: connectionString,
});
const bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
client.connect();

app.set("port", process.env.PORT || 3000);
app.use(
  cors({
    origin: "*",
  })
);
app.get("/show", (req, res, next) => {
  client.query(
    "select empcode,name,email,designation from emptable",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }

      res.status(200).send(result.rows);
    }
  );
});

app.listen(port, () => {
  console.log("running");
});
