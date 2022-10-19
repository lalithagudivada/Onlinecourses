const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const index = express();
const port = 3000;
const https = require("https");
const path = require("path");
index.use(express.json());

index.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require("./routes/index");

// view engine setup
index.set("views", path.join(__dirname, "views"));
index.set("view engine", "ejs");

index.use("/", indexRouter);

index.use(express.static(path.resolve("./public")));
index.listen(3000, () => {
  console.log("http://localhost:3000/");
});

module.exports = index;

index.use(express.static(path.resolve("./public")));
