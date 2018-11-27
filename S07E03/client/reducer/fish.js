export default function fishReducer (state = [], action) {
  switch (action.type) {
    case 'GET_FISH_SUCCESS':
      return action.fish

    default:
      return state
  }
}
