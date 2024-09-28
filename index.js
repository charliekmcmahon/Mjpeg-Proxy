// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var ports = [80, 443, 8080]; // Ports to run the proxy on

ports.forEach(function(port) {
  // Listen on the root domain (/) and display something
  app.get('/proxy', (req, res) => {
    res.send(`<h1>mjpeg proxy</h1> <br> <h5>Server is OK</h5>`);
  });

  // Create a proxy
  app.get('/proxy/insert-name-here', new MjpegProxy('http://mjpeg-stream-location:8080/video').proxyRequest);
  
  // Start the servers on each port
  app.listen(port);
  
});
