const add = require('./add')

test('Check Jest is working correctly', function () {
  expect(0).toBe(0)
})

test('Test add function', function () {
  // Arrange
  const num1 = 5
  const num2 = 7
  const expected = 12

  // Act
  const actual = add(num1, num2)

  // Assert
  expect(actual).toBe(expected)
})
