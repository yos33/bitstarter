var express = require('express');
var app = express.createServer(express.logger());

var outfile="index.html";
var buf = new Buffer(60);
var textFromFile;
var fs = require('fs');

buf = fs.readFileSync(outfile);
textFromFile=buf.toString();

app.get('/', function(request, response) {
  
  response.send(textFromFile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
