exports.seed = knex =>
  knex('widgets').del()
    .then(() =>
      knex('widgets').insert([
        { name: 'Red widget', price: '23.45', manufacturer: 'Acme Inc.', stock: 4 },
        { name: 'Blue widget', price: '423.47', manufacturer: 'Acme Inc.', stock: 8 },
        { name: 'Yellow widget', price: '123.4', manufacturer: 'Acme Inc.', stock: 3 },
        { name: 'Yellow widget', price: '110.99', manufacturer: 'Acme Inc.', stock: 2 },
        { name: 'Yellow widget', price: '100.5', manufacturer: 'Acme Inc.', stock: 9 }
      ])
    )
