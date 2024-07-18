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

app.post("/scan", (req, res) => {
  const inputText = req.body.text;
  qrcode.toDataURL(inputText, (err, src) => {
    res.render("scan", {
      qr_code: src,
    });
  });
});

module.exports = app;
