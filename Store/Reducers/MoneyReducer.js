const initialState = { lingots: 0 , coin: 0, entrepot: [{name:"pot", nombre: 1},{name:"homme soja", nombre: 2}]}

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
    var allreadyInEntrepot = false
    state.entrepot.map((item)=>{if(item.name === action.name){allreadyInEntrepot=true}})
    if(allreadyInEntrepot != false){
      return {
        ...state,
        entrepot: state.entrepot.map((item) => (
        item.name===action.name? {...item, nombre: item.nombre+1}: item
    ))
      }
    }else{
      return{
        ...state,
        entrepot: [...state.entrepot,{name: action.name,nombre: action.value}]
      }
    }
    return nextState || state
  default:
    return state
  }
}