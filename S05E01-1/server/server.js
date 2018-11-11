const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())

server.get('/message', (req, res) => {
  res.json({
    message: 'Hi I am a message'
  })
})

// Sample use with a database
// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => res.json({ users }))
//     .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
// })
//
// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getUser(id)
//     .then(user => {
//       res.json({ user })
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })
//
// router.post('/', (req, res) => {
//   db.createUser(req.body)
//     .then(id => {
//       res.status(201).json({
//         message: 'YAY IT WORKED',
//         id
//       })
//     })
//     .catch(err => {
//       res.json({
//         message: 'NOPE THAT DID NOT WORK',
//         error: err.message
//       })
//     })
// })

server.use(express.static(path.join(__dirname, './public')))

module.exports = server
