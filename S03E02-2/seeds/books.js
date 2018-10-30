exports.seed = knex =>
  knex('books')
    .del()
    .then(() => knex('books')
      .insert([
        { id: 1, title: 'This is a book title' },
        { id: 2, title: 'Wombats and how their poop is square' },
        { id: 3, title: 'Aardvarks have long noses' }
      ]))
