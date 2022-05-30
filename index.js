// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var ports = [80, 443, 8080];

ports.forEach(function(port) {
  // Listen on the root domain (/) and display something
  app.get('/', (req, res) => {
    res.send(`<h1>Netclaw Proxy</h1>`);
  });

  // Toy Soldier Camera
  app.get('/toy-soldier', new MjpegProxy('http://netclaw.ddns.net:8080/video').proxyRequest);
  
  // Test camera for beta testing
  //app.get('/video/1', new MjpegProxy('http://netclaw.ddns.net:8080/video').proxyRequest);
  
  //app.get('/video/2', new MjpegProxy('http://netclaw.ddns.net:8080/video').proxyRequest);

  // Start the servers on each port
  app.listen(port);
  
});
