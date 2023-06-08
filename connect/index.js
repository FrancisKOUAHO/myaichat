const WebSocket = require('ws');
const http = require('http');
const cors = require('cors');

const app = http.createServer((req, res) => {
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.writeHead(200);
		res.end();
		return;
	}
});

const wss = new WebSocket.Server({ server: app });

wss.on('connection', ws => {
	ws.on('message', message => {
		console.log('Received:', message.text());
		wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});

	ws.send('Hello! You are connected!');
});

app.listen(9999, () => {
	console.log(`Server started on port 9999`);
});
