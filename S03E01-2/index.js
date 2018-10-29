const knex = require('knex')
const config = require('./knexfile')['development']
const db = knex(config)

db('users')
  .then(users => {
    console.log('All users:', users)
    return users[0]
  })
  .then(user => {
    console.log('ONE user:', user)
    return user
  })
  .then(user =>
    db('users')
      .where('id', '=', user.id)
      .update({
        name: 'Wombats Rule',
        email: 'foo@bar.com',
        age: 1,
        phone: '12345'
      }))
  .then(console.log)
  .then(() => console.log('I GET SKIPPED'))
  .catch(err => {
    console.error('SOMETHING BAD HAPPENED', err.message)
  })
  .finally(() => {})
