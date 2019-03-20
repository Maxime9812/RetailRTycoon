const initialState = { lingots: 0 , coin: 0, entrepot: [{name:"vaginette", nombre: 1},{name:"vagine", nombre: 2}]}

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
    case 'REMOVE_COIN':
      nextState = {
        ...state,
        coin: state.coin-action.value
      }
    return nextState || state
    case 'ADD_ITEM':
      nextState = {
        ...state,
        entrepot: [...state.entrepot,{name: action.name,nombre: action.value}]
      }
    return nextState || state
  default:
    return state
  }
}