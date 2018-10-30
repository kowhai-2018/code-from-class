exports.seed = knex =>
  knex('users')
    .del()
    .then(() => knex('users')
      .insert([
        { id: 1, email: 'wombat@mcsquarepoop.com', created_at: knex.fn.now(), updated_at: knex.fn.now(), name: 'FROM USERS' },
        { id: 2, email: 'aardvark@mclongnose.org', created_at: knex.fn.now(), updated_at: knex.fn.now(), name: 'FROM USERS' },
        { id: 3, email: 'foo@bar.net', created_at: knex.fn.now(), updated_at: knex.fn.now(), name: 'FROM USERS' }
      ]))
