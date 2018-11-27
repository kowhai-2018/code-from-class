exports.seed = knex =>
  knex('fish').del()
    .then(() =>
      knex('fish').insert([
        { name: 'paua' },
        { name: 'cockle' },
        { name: 'kingfish' },
        { name: 'kahawai' },
        { name: 'grey mullet' },
        { name: 'butterfish' },
        { name: 'striped marlin' },
        { name: 'tarakihi' },
        { name: 'whitebait' },
        { name: 'blue cod' },
        { name: 'elephantfish' },
        { name: 'red snapper' }
      ]))
