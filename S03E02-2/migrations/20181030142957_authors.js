exports.up = knex =>
  knex.schema.createTable('authors', t => {
    t.increments('id')
    t.string('name')
  })

exports.down = knex => knex.schema.dropTable('authors')
