const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
	console.log(req.body);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hellooooooo');
});

server.listen(port, hostname, () => {
	console.log(`Listening to port ${port}`);
});
