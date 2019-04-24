require('dotenv').config();

const knex = require('knex');
const config = require('../knexfile');

//Testing or Developement Environment
const dbEnv = process.env.DB_CONNECT || 'development';

module.exports = knex(config[dbEnv]);