// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var ports = [80, 8080, 443];

ports.forEach(function(port) {
  // Listen on the root domain (/) and display something
  app.get('/proxy', (req, res) => {
    res.send(`<h1>Netclaw Proxy</h1> <br> <h5>v0.1.1 - 10-04-2022, 14:09</h5>`);
  });

  // Toy Soldier Camera
  app.get('/proxy/toy-soldier', new MjpegProxy('http://netclaw.ddns.net:8081/video').proxyRequest);
  
  // Test camera
  app.get('/proxy/video/1', new MjpegProxy('http://49.191.169.230:4747/video?640x480').proxyRequest);

  // Start the servers on each port
  app.listen(port);
  
});
