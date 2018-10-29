const knex = require('knex')
const config = require('./knexfile')['development']

const db = knex(config)

db('users')
  .join('profiles', 'users.id', '=', 'profiles.user_id')
  .select('users.id', 'email', 'bio', 'avatar')
  .then(users => console.log(users))
  .catch(e => console.error('HEY! Don\'t do that!'))
