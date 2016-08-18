'use strict';

const http = require('http');
const app = require('../app');
const server = http.createServer(app);

server.listen(3000, function() {
  console.log('Listen on port 3000');
});
