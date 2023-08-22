var express = require("express");
var app = express();

//static routing

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// app.get("/profile", function (req, res) {
//   res.send("Hello World! I’m Profile Page");
// });

// dynamic routing

app.get("/profile", function (req, res) {
  res.sendFile(__dirname + "/profile.html");
});
app.get("/profile/:name", function (req, res) {
  res.send("you postedto profile with" + "the profile name" + req.params.name);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
