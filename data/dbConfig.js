const knex = require('knex');
//Testing or Developement Environment
const dbEnv = process.env.DB_CONNECT || 'development';
const config = require('../knexfile')[dbEnv];

module.exports = knex(config);
