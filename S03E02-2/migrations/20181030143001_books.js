exports.up = knex =>
  knex.schema.createTable('books', t => {
    t.increments('id')
    t.integer('author_id')
    t.string('title')
  })

exports.down = knex => knex.schema.dropTable('books')
