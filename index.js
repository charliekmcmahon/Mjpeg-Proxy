// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var ports = [80, 8080, 443];

ports.forEach(function(port) {
  // Listen on the root domain (/) and display something
  app.get('/', (req, res) => {
    res.send(`<br> working`);
  });

  // Toy Soldier Camera
  app.get('/toy-soldier', new MjpegProxy('http://netclaw.ddns.net:8081/video').proxyRequest);

  // Start the servers on each port
  app.listen(port);
  
});
