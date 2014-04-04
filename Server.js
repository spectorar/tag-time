var http = require('http');
var fs = require("fs");
// var DataManager = require('./DataManager.js');
var home = fs.readFileSync("index.html");
// var home = fs.readFileSync("index.html");

http.createServer(function(req, res) {
	mainHandle(req, res);
}).listen(2121, 'localhost');
console.log('Server running at localhost:2121');


function mainHandle(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(home);
}