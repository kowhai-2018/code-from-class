export default function infoReducer (state = {}, action) {
  switch (action.type) {
    case 'GET_FISH_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'GET_FISH_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'GET_FISH_ERROR':
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
