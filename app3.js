const http = require('http');
const https = require('https');
const querystring = require('querystring');
const { getDatabaseItems, getDatabaseItemById } = require('./databaseHandler');

// Handle GET Request
const handleGetRequest = (req, res) => {
	// Set response headers
	// res.setHeader('Content-Type', 'application/json');
	// res.setHeader('Cache-Control', 'no-cache');

	const url = new URL('https://static-assets.codecademy.com/Courses/Learn-Node/http/data.json?id=25&format=pretty');

	// Parse query parameters using querystring module
    const urlParts = req.url.split('?');
    const queryParams = urlParts[1] ? querystring.parse(urlParts[1]) : {};

	const options = {
		hostname: url.hostname,
		path: url.pathname,
		searchParams: url.searchParams,
		method: 'GET',
	};

	const request = https.request(options, (response) => {
		let data = '';

		response.on('data', (chunk) => {
			data += chunk;
		});

		response.on('end', (chunk) => {
			console.log(`Response successful. Data received: ${data}`);
			console.log('Response headers:', response.headers);
			// use queryParams from querystring module here =>
			// if (queryParams.format === 'pretty') {
			// 	try {
			// 		const parsedData = JSON.parse(data);
			// 		data = JSON.stringify(parsedData, null, 4);
			// 	}
			// 	catch (err) {
			// 		console.log('Error parsing JSON for pretty format:', err);
			// 	}
			// }
			
			res.end(data);
		});
	});

	request.end()
}

// Creates server instance
const server = http.createServer((req, res) => {
	const { method } = req;

	switch(method) {
		case 'GET':
			return handleGetRequest(req, res);
		default:
			throw new Error(`Unsupported request method: ${method}`);
	}
});

// Starts server listening on specified port
server.listen(4001, () => {
	const { address, port } = server.address();
	console.log(`Server is listening on: http://${address}:${port}`);
});