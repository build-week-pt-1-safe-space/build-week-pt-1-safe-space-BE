const knex = require('knex');
const dbEnv = process.env.DB_CONNECT || 'development';
const config = require('../knexfile')[dbEnv];

//Testing or Developement Environment

module.exports = knex(config);
