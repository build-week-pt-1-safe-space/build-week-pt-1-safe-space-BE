const knex = require('knex');
const config = require('../knexfile')[dbEnv];

//Testing or Developement Environment
const dbEnv = process.env.DB_CONNECT || 'development';

module.exports = knex(config);