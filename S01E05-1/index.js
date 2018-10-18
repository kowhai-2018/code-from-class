const server = require('./server')
const path = require('path')

server.listen(3000, function () {
  console.log('Listening on port 3000...')
})

server.get('/', (req, res) => {
  console.log('Welcome to the internet')
  res.send('Welcome to the internet')
})

server.get('/kowhai', (req, res) => {
  console.log('Kowhai is cool!')
  res.send('<h2>Kowhai rocks</h2>')
})

server.get('/hi/:name', (req, res) => {
  const name = req.params.name

  console.log('Hitting /hi')
  res.send('Hi ' + name + '!')
})

server.get('/faq', (req, res) => {
  console.log('Hitting /faq')

  res.sendFile(path.join(__dirname, './faq.html'))
})
