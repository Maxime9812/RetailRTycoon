const initialState = { lingots: 0 , coin: 0}

export default function Money(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD_LINGOTS':
        nextState = {
          ...state,
          lingots: state.lingots+action.value
        }
      return nextState || state
    case 'ADD_COIN':
      nextState = {
        ...state,
        coin: state.coin+action.value
      }
    return nextState || state
  default:
    return state
  }
}