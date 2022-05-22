// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var ports = [80, 443, 8080];

ports.forEach(function(port) {
  // Listen on the root domain (/) and display something
  app.get('/', (req, res) => {
    res.send(`<h1>Netclaw Proxy</h1> <br> <h5>v0.1.1 - 10-04-2022, 14:09</h5>`);
  });

  // Toy Soldier Camera
  app.get('/toy-soldier', new MjpegProxy('http://netclaw.ddns.net:8080/video').proxyRequest);
  
  // Test camera
  app.get('/video/1', new MjpegProxy('http://netclaw.ddns.net:8080/video').proxyRequest);

  // Start the servers on each port
  app.listen(port);
  
});
