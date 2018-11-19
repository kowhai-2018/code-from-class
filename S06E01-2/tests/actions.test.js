import { updateWombat } from '../client/actions'

test('updateWombat returns an action with a type', () => {
  const expected = 'UPDATE_WOMBAT'
  const actual = updateWombat('Gertrude').type
  expect(actual).toBe(expected)
})

test('updateWombat sets wombat name correctly', () => {
  const expected = 'Gertrude'
  const action = updateWombat('Gertrude')
  const actual = action.wombat
  expect(actual).toBe(expected)
})

test('updateWombat sets change correctly', () => {
  const expected = 'Gestalt'
  const action = updateWombat('Gertrude', 'Gestalt')
  const actual = action.change
  expect(actual).toBe(expected)
})
