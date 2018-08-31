var http = require('http');
var url = require('url');
var fs = require('fs');
var server;

server = http.createServer(function (req, res) {
  // your normal server code
  var path = url.parse(req.url).pathname;
  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      return send404(res);
    }
    res.writeHead(200, { 'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html' });
    res.write(data, 'utf8');
    res.end();
  });
}),
  server.listen(8001);
//using express to load customizes static files
var express = require("express"),
  app = express();

app.all("/api/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});
app.use("/js", express.static(__dirname + '/js'));
app.listen(3001);
console.log(`Server running`);
