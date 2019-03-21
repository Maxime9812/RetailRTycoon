import Data from '../../JSON/Data.json'

const initialState = { 
  lingots: 0 ,
  coin: 0,
  entrepot: Data.entrepot,
  achat: Data.achat,
  shop: Data.shop,
  succes: Data.succes
}

export default function Money(state = initialState, action) {
  let nextState
  switch (action.type) {

    // --- LINGOTS ---
    case 'ADD_LINGOTS':
        nextState = {
          ...state,
          lingots: state.lingots+action.value
        }
      return nextState || state

      // --- COIN ---
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

    // --- ENTREPOT ---
    case 'ADD_ITEM':
    var allreadyInEntrepot = false
    state.entrepot.map((item)=>{if(item.name === action.name){allreadyInEntrepot=true}})
    if(allreadyInEntrepot != false){
      return {
        ...state,
        entrepot: state.entrepot.map((item) => (
        item.name===action.name? {...item, nombre: item.nombre+action.value}: item
    ))
      }
    }else{
      return{
        ...state,
        entrepot: [...state.entrepot,{name: action.name,nombre: action.value}]
      }
    }
    case 'REMOVE_ITEM':
    var remove = false
    state.entrepot.map((item,index)=>{if(item.name === action.name && item.nombre === 1){remove=index}})
    if(remove === false){
      return {
        ...state,
        entrepot: state.entrepot.map((item) => (
        item.name===action.name? {...item, nombre: item.nombre-1}: item
    ))
      }
    }else{
      return {...state,
      entrepot: state.entrepot.filter( item=> item != state.entrepot[remove])}
    }
  default:
    return state
  }
}