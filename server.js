var express = require("express");
var app = express();
var PORT = process.env.PORT || 0817;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});