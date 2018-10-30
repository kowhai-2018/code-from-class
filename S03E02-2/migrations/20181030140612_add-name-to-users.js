exports.up = knex =>
  knex.schema.table('users', t => {
    t.string('name')
  })

exports.down = knex =>
  knex.schema.table('users', t => {
    t.dropColumn('name')
  })
