var app = require('express')();
var http = require('http').Server(app);
var gpio = require("pi-gpio");

//var intervalId;
//var durationId;
//var Pin1 = 7;
//var Pin2 = 12;


app.get('/', function(req, res) {
  //res.send('<h1>Hello World</h1>');  //send Hello World
  res.sendFile(__dirname + '/index.html'); //send a file
});

app.post('/OnRed', function(req, res) {
	gpio.open(12, "output", function(err) {
		console.log('GPIO pin 12 is open');
	  	gpio.write(12, 1, function() { // toggle pin between high (1) and low (0)
	  	});
	});
});

app.post('/OffRed', function(req, res) {
	console.log('GPIO pin 12 is off');
	gpio.write(12, 0, function() { // turn off Pin
	});
	gpio.close(12, function(err) {
	});
});

app.post('/OnYellow', function(req, res) {
	gpio.open(7, "output", function(err) {
		console.log('GPIO pin 7 is open');
  			gpio.write(7, 1, function() { // toggle pin between high (1) and low (0)
  		});
	});
});

app.post('/OffYellow', function(req, res) {
	console.log('GPIO pin 7 is off');
	gpio.write(7, 0, function() { // turn off Pin
	});
	gpio.close(7, function(err) {
	});
});

http.listen(3000, function(){
  console.log('listening on 192.168.1.101:3000');
});
