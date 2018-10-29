exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id')
    t.string('name')
    t.string('phone')
    t.integer('age')
    t.string('email')
  })

exports.down = knex => knex.schema.dropTable('users')

