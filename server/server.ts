var PORT = process.env.PORT || 4000;
import express = require('express');
import http = require('http');
import path = require('path');
import bodyParser = require('body-parser');

exports.app = express();

exports.app.use(express.static(__dirname + '/../public'));
exports.app.use(bodyParser.urlencoded({
    extended: true
}));

var server = http.createServer(exports.app);
server.listen(PORT);
console.log("RUNNING " + PORT);

