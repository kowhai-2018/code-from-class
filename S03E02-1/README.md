### users

col        | notes
-----------|------
id         | MUST BE UNIQUE, probably auto-increment
email      |
created_at | `knex.timestamps()` (also note `knex.fn.now()`
updated_at |

### profiles

col        | notes
-----------|------
id         | UNIQUE
user_id    | references `users.id`
bio        |
avatar     | probably a URL
created_at | `knex.timestamps()`
updated_at |


### contacts

col        | notes
-----------|------
id         | UNIQUE
user_id    | references `users.id`
phone      |
url        |
created_at | `knex.timestamps()`
updated_at |

What if we need: email from users AND phone from contacts AND bio from profiles? JOINS.
