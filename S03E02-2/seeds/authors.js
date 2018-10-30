exports.seed = knex =>
  knex('authors')
    .del()
    .then(() => knex('authors')
      .insert([
        { id: 1, name: 'Gertrude' },
        { id: 2, name: 'Maggie' },
        { id: 3, name: 'Florence' }
      ]))
