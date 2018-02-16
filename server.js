var express = require("express");
var app = express();

var path = require("path");

var mongoose = require("mongoose");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(__dirname + "/PokeAngular/dist"));

app.listen(8001, function() {
    console.log("listening on port 8001");
})
