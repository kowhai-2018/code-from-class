const express = require('express')
const hbs = require('express-handlebars')
const knex = require('knex')
const config = require('./knexfile')['development']

const db = knex(config)
const server = express()

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.get('/books', (req, res) => {
  db('authors_books')
    .select('authors.id as authorId', 'books.id as bookId', 'title', 'name')
    .where('authors.id', 3)
    .join('authors', 'authors.id', '=', 'authors_books.author_id')
    .join('books', 'books.id', '=', 'authors_books.book_id')
    .then(result => {
      const books = []
      result.forEach(book => {
        if (!books.find(b => b.bookId === book.bookId)) {
          books.push(book)
        }
      })
      const author = {}
      author.name = result[0].name
      author.books = books
      res.render('books', author)
    })
})

// Consider this way to get a list of authors and their books
server.get('/authors', (req, res) => {
  db('authors_books')
    .select('authors.id as authorId', 'books.id as bookId', 'title', 'name')
    .join('authors', 'authors.id', '=', 'authors_books.author_id')
    .join('books', 'books.id', '=', 'authors_books.book_id')
    .then(result => {
      const authorsAndBooks = result.reduce((index, row) => {
        // `index` is an object that we use to organise our authors
        // Each author is a property name. Its value is an array of book titles.
        if (!index[row.name]) {
          index[row.name] = [ row.title ]
        } else {
          index[row.name].push(row.title)
        }
        return index
      }, {})

      // So now we have an object! We kinda need an array of objects.
      const authors = Object.keys(authorsAndBooks).map(author => {
        const books = authorsAndBooks[author]
        return {
          author,
          books
        }
      })

      // Now we have an authors array that looks like this:
      // [
      //   { author: 'Gertrude', books: [ 'Aardvarks and Antelopes', 'Wombats and Whales' ] },
      //   { author: 'Maisie', books: [ 'Golden Giraffes', 'Bodacious Baboons' ] }
      // ]
      res.render('authors', { authors })
    })
})

server.get('/profiles', (req, res) => {
  db('users')
    .join('profiles', 'users.id', '=', 'profiles.user_id')
    .select('users.id', 'user_id as userId', 'email', 'bio', 'avatar', 'users.name as userName', 'profiles.name as profileName')
    .then(users => {
      res.render('profiles', { users })
    })
    .catch(e => res.send('Hey, something bad happened. We don\'t know what. Please don\'t be mad.'))
})

module.exports = server
