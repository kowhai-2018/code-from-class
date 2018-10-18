const game = require('../game')

test('Test setup working', function () {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', function () {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', function () {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', function () {
  const frame = [2, 8]
  const nextFrame = [6, 3]
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(16)
})

test('scores a single strike frame', function () {
  const frame = [10]
  const nextFrame = [5, 1]
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(16)
})

test('scores a double strike frame', function () {
  const frame = [10]
  const nextFrame = [10]
  const nextnextFrame = [6, 1]
  const actual = game.scoreFrame(frame, nextFrame, nextnextFrame)
  expect(actual).toBe(26)
})

test('scores a game', function () {
  const frames = [
    [1, 2], [6, 4], [5, 4], [10], [7, 2], [10], [10], [5, 2], [7, 0], [4, 4]
  ] // 3      18      27     46     55     80    97     104     111     119
  const score = game.scoreGame(frames)
  expect(score).toBe(119)
})
