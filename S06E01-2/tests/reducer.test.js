import wombatReducer from '../client/reducer'
import { updateWombat } from '../client/actions'

test('wombatReducer updates Gertrude to Gestalt', () => {
  // Arrange
  const expected = {
    wombats: [ 'Foo', 'Bar', 'Gestalt', 'Aaardvark' ]
  }
  const initialState = {
    wombats: [ 'Foo', 'Bar', 'Gertrude', 'Aaardvark' ]
  }
  const action = updateWombat('Gertrude', 'Gestalt')

  // Act
  const actual = wombatReducer(initialState, action)

  // Assert
  expect(actual).toEqual(expected)
})
