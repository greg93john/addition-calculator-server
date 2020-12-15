const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res){
  var result = Number(req.body.num1) + Number(req.body.num2);
  res.send("The sum of the two numbers is: " + result);
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(height * height);
  res.send("Your BMI is: " + result);
});

app.listen("3000", () => { console.log("Running Calculator app, on port: 3000"); });
