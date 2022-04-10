// Install the dependencies
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

// Listen on the root domain (/) and display something
app.get('/', (req, res) => {
  res.send(`<br> Media proxy -> <strong style="color: lightgreen; font-family: Arial;">online<strong>
	<br>
	<p>Toy Soldier:</p>
	<img src="/toy-soldier" width="100"></img> <br>
	`);
})

// Toy Soldier Camera
app.get('/toy-soldier', new MjpegProxy('http://netclaw.ddns.net:8081/video').proxyRequest);

// Start the server on port 80
app.listen(80);