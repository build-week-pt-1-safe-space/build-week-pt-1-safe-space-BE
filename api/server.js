//Express Server
const express = require('express');
const server = express();

//Databas Config
const db = require('../data/dbConfig');

//SMS Functions
const timeCheck = require('../twilio/smsTimeCheck');

//Middleware Import
const helmet = require('helmet');
const cors = require('cors');
// const logger = require('morgan');

//Routes Import
const authRoutes = require('./auth/auth-routes');
const routes = require('./routes');

//Middleware Use
server.use(express.json());
server.use(helmet(), cors());
// server.use(logger('dev'));

//Routes Use
server.use('/api', authRoutes);
server.use('/api', routes);

//Root Routes
server.get('/', async (req, res) => {
    res.status(200).json({ api: 'Up and Running' });
});

const compareCycle = () => {
    intervalID = setInterval(() => {
        db.select('*')
            .from('messages')
            .then(messages => {
                    messages.map(message => {
                    timeCheck(message);
                });
            })
            .catch(err => {
                console.log(err)
            })
    }, 50000);
}


compareCycle();

module.exports = server;