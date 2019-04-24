//Express Server
const express = require('express');
const server = express();
//Middleware
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

server.use(express.json());
server.use(helmet(), cors());
server.use(logger('dev'));

module.exports = server;