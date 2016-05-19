/*
The MIT License (MIT)

Copyright (c) 2014 Mark Finger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var argv = require('yargs')
	.option('p', {
		alias: 'port',
		description: 'Specify the server\'s port',
		default: 9009
    })
    .option('a', {
		alias: 'address',
		description: 'Specify the server\'s address',
		default: '127.0.0.1'
    })
    .help('h').alias('h', 'help')
    .strict()
    .argv;

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var reactRender = require('react-render');

// Ensure support for loading files that contain ES6+7 & JSX
require('babel-core/register');

var ADDRESS = argv.address;
var PORT = argv.port;

var app = express();
var server = http.Server(app);

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.end('React render server');
});

app.post('/render', function(req, res) {
	reactRender(req.body, function(err, markup) {
		if (err) {
			res.json({
				error: {
					type: err.constructor.name,
					message: err.message,
					stack: err.stack
				},
				markup: null
			});
		} else {
			res.json({
				error: null,
				markup: markup
			});
		}
	});
});

server.listen(PORT, ADDRESS, function() {
	console.log('React render server listening at http://' + ADDRESS + ':' + PORT);
});
