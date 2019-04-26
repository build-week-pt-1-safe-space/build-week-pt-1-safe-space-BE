const knex = require('knex');
<<<<<<< HEAD
const dbEnv = process.env.DB_CONNECT || 'development';
=======
>>>>>>> e305c27ac1b00fec58713e2afd3c1072af22609b
const config = require('../knexfile')[dbEnv];

//Testing or Developement Environment

<<<<<<< HEAD
module.exports = knex(config);
=======
module.exports = knex(config);
>>>>>>> e305c27ac1b00fec58713e2afd3c1072af22609b
