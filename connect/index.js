const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

const wss = new WebSocket.Server({ server, transports: ['websocket']});

wss.on('connection', ws => {
	ws.on('message', message => {
		console.log('Received:', message);
		wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});

	ws.send('Hello! You are connected!');
});

app.get('/', (req, res) => {
	res.send('Welcome to the homepage!');
});

server.listen(9999, () => {
	console.log('Server started on port 9999');
});
