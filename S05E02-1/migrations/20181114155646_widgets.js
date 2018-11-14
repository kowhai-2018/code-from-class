exports.up = knex =>
  knex.schema.createTable('widgets', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('price')
    t.string('manufacturer')
    t.integer('stock')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('widgets')

