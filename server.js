var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static('frontend/build'));

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html', {encoding: 'utf8'}));
  console.log("responded to client");
});

io.on('connection', (socket) => {
	socket.on('hello', (msg) =>{
		console.log('Message is:' + msg);
	});
  socket.emit('message', 'hello world');
  console.log("Client connected");
  //console.log(data);
});


server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
