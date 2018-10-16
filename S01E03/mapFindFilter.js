const students = [
  'Chris',
  'Kiri',
  'Carel',
  'Maya',
  'Dani',
  'Alina',
  'Allie',
  'Jeremy'
]

const uppercaseStudents = students.map(student =>
  student.toUpperCase()
)

// console.log(uppercaseStudents)

const people = [
  {name: 'Bob', location: 'Auckland'},
  {name: 'Sarah', location: 'Wellington'},
  {name: 'Wally', location: 'Moscow'},
  {name: 'Jim', location: 'Dunedin'},
  {name: 'Jess', location: 'Christchurch'}
]

const wheresWally = people.find(person =>
  person.name === 'Wally'
)

// console.log('Wally is in', wheresWally.location)

const words = [
  'potato',
  'kumara',
  'avocado',
  'pizza',
  'beanbag',
  'kiwi'
]

const shortWords = words.filter(word => word.length < 6)

// console.log(shortWords)

const wordsContainingP = words.filter(
  word => word.indexOf('p') > -1
)

// console.log(wordsContainingP)
