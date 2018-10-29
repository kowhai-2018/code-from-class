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
