const config = require('../knexfile')['development']
const knex = require('knex')

const connection = knex(config)

function getFish (db = connection) {
  return db('fish')
}

module.exports = {
  getFish
}
