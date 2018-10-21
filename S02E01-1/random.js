function greeting (name) {
  setTimeout(() => console.log(name), Math.random() * 1000)
}

greeting('a')
greeting('b')
greeting('c')
greeting('d')
greeting('e')
