exports.up = knex =>
  knex.schema.createTable('profiles', t => {
    t.increments('id')
    t.integer('user_id')
    t.string('bio')
    t.string('avatar')
    t.timestamps()
  })

exports.down = knex => knex.schema.dropTable('profiles')
