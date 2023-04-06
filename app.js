const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(
			JSON.stringify({
				id: 1,
				name: 'Patrick',
			})
		);
	} else {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World\n');
	}
});

server.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
