const greet = (name) => {
  return 'Hello ' + name
}

const func = () => {
  console.log(greet('Kōwhai'))
  const greetRich = () => console.log(greet('Rich'))
  setTimeout(greetRich, 1000)
  console.log(greet('Bryce'))
}

setTimeout(func, 500)
