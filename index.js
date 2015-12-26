var app = require('express')();
var http = require('http').Server(app);
var gpio = require("pi-gpio");

//var intervalId;
//var durationId;
//var Pin1 = 7;
//var Pin2 = 12;
//var Pin = 7;

app.get('/', function(req, res) {
  //res.send('<h1>Hello World</h1>');  //send Hello World
  res.sendFile(__dirname + '/index.html'); //send a file
});

gpio.open(Pin, "output", function(err) {
	console.log('GPIO pin '+Pin+' is open');
  	gpio.write(Pin, 1, function() { // toggle pin between high (1) and low (0)
  	});
});

gpio.close(Pin, "output", function(err) {
	console.log('GPIO pin '+Pin+' is off');
  gpio.write(Pin, 0, function() { // turn off Pin
    gpio.close(Pin); // then Close Pin
  });
});

http.listen(3000, function(){
  console.log('listening on 192.168.1.101:3000');
});
