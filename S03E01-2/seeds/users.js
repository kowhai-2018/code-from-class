exports.seed = knex =>
  knex('users')
    .del()
    .then(() => knex('users')
      .insert([
        { id: 1, name: 'Herbert McFartyFace' },
        { id: 2, name: 'Gertrude Alloicious' },
        { id: 3, name: 'Wombat McPoopSquare' }
      ]))
