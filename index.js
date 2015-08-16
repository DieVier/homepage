var express = require('express');

var PORT = 8080;

var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res) {
    res.send(__dirname + "/index.html");
});

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
