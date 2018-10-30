exports.up = knex =>
  knex.schema.table('profiles', t => {
    t.string('name')
  })

exports.down = knex =>
  knex.schema.table('profiles', t => {
    t.dropColumn('name')
  })
