const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : process.argv[2],
    password : process.argv[3],
    database : 'template1'
  }
})

module.exports = knex