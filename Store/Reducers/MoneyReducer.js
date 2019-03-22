import Data from '../../JSON/Data.json'

const initialState = { 
  lingots: 0 ,
  coin: 10000,
  entrepot: Data.entrepot,
  achat: Data.achat,
  shop: Data.shop,
  succes: Data.succes,
  entrepotSize: Data.entrepotSize,
  entrepotUp: Data.entrepotUp,
  prix: Data.prix,
  emplacement: 0,
  level: 1,
  point:0,
  mySucces: [{objetId:0,nb:0,idSucces:0},{objetId:2,nb:0,idSucces:3}]
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
    // --- POINT ---
        case 'ADD_POINT':
        nextState = {
          ...state,
          point: state.point+action.value
        }
      return nextState || state
      case 'REMOVE_ALL_POINT':
        nextState = {
          ...state,
          point: 0
        }
      return nextState || state
        // --- LEVEL ---
      case 'ADD_LEVEL':
      nextState = {
        ...state,
        level: parseInt(state.level)+parseInt(action.value)
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

    // --- PRIX ---
    case 'CHANGE_PRIX':
     const VARIATION = 20
       return {
         ...state,
         prix: state.prix.map((item) => (item = Math.round(item *(1+(Math.floor(((Math.random()* Math.floor(VARIATION))-(VARIATION/2)))/100)))))
       }

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
        entrepot: [...state.entrepot,{id:action.id,name: action.name ,taille : action.taille, nombre:action.value}]
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
    case 'ADD_EMPLACEMENT':
      return {...state,emplacement : state.emplacement+action.value}
    case 'REMOVE_EMPLACEMENT':
    return {...state,emplacement : state.emplacement-action.value}
    //--- SUCCES ---
    case 'ADD_SUCCES':
    return {
        ...state,
        succes: state.succes.map((item) => (
        item.id===action.id? {...item, level: item.level+1}: item
    ))}
    case 'ADD_MYSUCCES':
    return {
        ...state,
        mySucces: state.mySucces.map((item,index) => (
        item.objetId === action.id? {...item,nb:item.nb+1}: item))
    }
  default:
    return state
  }
}