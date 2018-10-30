users
=====
id -> MUST BE UNIQUE, probably auto-increment
email
created
updated

profiles
========
id -> MUST BE UNIQUE
user_id -> users.id
bio
avatar
created -> knex.timestamps()
updated

contacts
========
id
user_id -> users.id
phone
url
created
updated

What if we need: email from users AND phone from contacts AND bio from profiles? JOINS.

authors
=======
id
name

books
=====
id
author_id
title

authors_books
=============
id
author_id -> authors.id
book_id -> books.id

author_id | book_id
  1       | 999
  2       | 999
  3       | 65


