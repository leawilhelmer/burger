const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8030;

const exphbs = require('express-handlebars');
const mysql = require('mysql');


var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller');
app.use('/', router);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});