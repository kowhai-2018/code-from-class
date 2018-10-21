function printText () {
  console.log('Hello')

  const welcome = () => console.log('Welcome to')

  setTimeout(welcome, 1000)

  console.log('The Matrix')
}

printText()
