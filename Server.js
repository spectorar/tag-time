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
	var file;

	if (req.url === "/") {
		fileName = "index.html";
	} else {
		fileName = req.url.substring(1, req.url.length);
	}
	console.log(fileName);

	try {
		file = fs.readFileSync(fileName);
	} catch (e) {
		console.log(e);
		file = null;

	}
		var ext = path.extname(req.url) || ".html";
		var contentType = dictTypes[ext] || 'text/html';
		res.writeHead(200, {'Content-Type' : contentType});
		res.end(file);
}