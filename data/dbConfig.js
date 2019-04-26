const knex = require('knex');
const config = require('../knexfile');

const dbEnv = process.env.DB_CONNECT || 'development';

//Testing or Developement Environment

module.exports = knex(config[dbEnv]);
