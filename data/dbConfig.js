const knex = require('knex');
const config = require('../knexfile');

const dbEnv = 'development';
// process.env.DB_CONNECT ||

//Testing or Developement Environment

module.exports = knex(config[dbEnv]);
