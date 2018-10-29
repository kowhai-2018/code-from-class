exports.seed = knex =>
  knex('profiles')
    .del()
    .then(() => knex('profiles')
      .insert([
        { user_id: 1, bio: 'I am a wombat. That is all.', avatar: 'https://wombats.org/pic.png', created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { user_id: 2, bio: 'I am not a wombat.', avatar: 'https://aardvarks.org/pic.png', created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { user_id: 3, bio: 'I am not a wombat or an aardvark.', avatar: 'https://foo.org/pic.png', created_at: knex.fn.now(), updated_at: knex.fn.now() }
      ]))
