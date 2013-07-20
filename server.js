var http = require('http'),
    fs = require('fs')

var server = http.createServer(function(req, res) {
  // send all urls to render index
  path = req.url;
  
  if (path == '/') {
    var path = 'index.html';
  }

  var absPath = __dirname + '/' + path;

  // load file
  fs.readFile(absPath, function(error, content) {
    if (error) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200);
      res.end(content, 'utf-8');
    }
  });
});

server.listen(8000);
console.log('Listening on port: 8000');

