const types = {
  str: 'I am a string',
  bool: true,
  numI: 42,
  numF: 4.2,
  arr: [ '1', '2' ],
  obj: {one: 'one'},
  fun: function () { console.log('I am a function') },
  und: undefined,
  nan: NaN,
  nul: null
}

console.log('This is a string?:', typeof types.str)
console.log('This is a boolean?:', typeof types.bool)
console.log('This is a number?:', typeof types.numI)
console.log('This is a float?:', typeof types.numF)
console.log('This is a array?:', typeof types.arr)
console.log('This is a object?:', typeof types.obj)
console.log('This is a function?:', typeof types.fun)
console.log('This is a undefined?:', typeof types.und)
console.log('This is a NaN?:', typeof types.nan)
console.log('This is a null?:', typeof types.nul)

module.exports = {types}
