var PORT = process.env.PORT || 4000;
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

exports.app = express();

exports.app.use(express.static(__dirname + '/../public'));
exports.app.use(bodyParser.urlencoded({
    extended: true
}));

var server = http.createServer(exports.app);
server.listen(PORT);
console.log("RUNNING " + PORT);

