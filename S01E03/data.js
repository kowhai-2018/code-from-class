const data = {
  id: 1234,
  firstName: 'Bryce',
  lastName: 'Kehoe',
  dateOfBirth: '19-3-XXXX', // you'll never know...
  active: false,
  papers: {
    CompSci320: {
      test1: 'A+',
      test2: 'A',
      exam: 'A+++'
    },
    CompSci373: {
      test1: 'C',
      test2: 'B',
      exam: 'A+'
    }
  }
}

console.log(data.papers.CompSci373.exam)
