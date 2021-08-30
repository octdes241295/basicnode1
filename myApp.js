



var express = require('express');
var app = express();
console.log("Hello World");

var response="go";
if (process.env.MESSAGE_STYLE === "uppercase") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
};

app.use("/public", express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  res.json({
    message: response
  });
});






























 module.exports = app;
































 module.exports = app;
