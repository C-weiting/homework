const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {

});

server.listen(conf.port, conf.hostname, () => {

});