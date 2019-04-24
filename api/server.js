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

//Server Routes

//Root Routes
server.get('/', async (req, res) => {
    res.status(200).json({ api: 'Up and Running' });
});

module.exports = server;