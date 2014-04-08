var http = require('http');
var fs = require("fs");
var path = require("path");
// var DataManager = require('./DataManager.js');

var dictTypes = {
  '.js': 'text/javascript',
  '.css': 'text/css',
}


http.createServer(function(req, res) {
	mainHandle(req, res);
}).listen(2121, 'localhost');
console.log('Server running at localhost:2121');


function mainHandle(req, res) {
	var fileName;
	if (req.url === "/") {
		fileName = "index.html";
	} else {
		fileName = req.url.substring(1, req.url.length);
	}

	var file = fs.readFileSync(fileName);
	var ext = path.extname(req.url) || ".html";
	var contentType = dictTypes[ext] || 'text/html';
	res.writeHead(200, {'Content-Type' : contentType});
	res.end(file);
}