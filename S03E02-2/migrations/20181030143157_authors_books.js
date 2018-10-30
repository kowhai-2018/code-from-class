exports.up = knex =>
  knex.schema.createTable('authors_books', t => {
    t.increments('id')
    t.integer('author_id')
    t.integer('book_id')
  })

exports.down = knex => knex.schema.dropTable('authors_books')
