// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

var express2 = require('express');
var app2 = express2();

// Listen on the root domain (/) and display something
app.get('/', (req, res) => {
  res.send(`<br> working`);
});

// Toy Soldier Camera
app.get('/toy-soldier', new MjpegProxy('http://netclaw.ddns.net:8081/video').proxyRequest);

// Start the server on port 80
app.listen(80);

// Listen on port 8080
app2.get('/', (req, res) => {
  res.send(`<br> working`);
});

app2.listen(8080);
