const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const qrcode = require("qrcode");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
