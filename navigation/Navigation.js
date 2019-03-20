import { createStackNavigator, createAppContainer } from 'react-navigation'
import Shop from '../components/Shop'
import Achat from '../components/Achat'
import Vente from '../components/Vente'
import Entrepot from '../components/Entrepot'
import Game from '../components/Game'

const SearchStackNavigator = createStackNavigator({
  Game: {
    screen: Game,
    navigationOptions: {
      title: 'Game'
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: 'Shop'
    }
  },
  Entrepot: {
    screen: Entrepot,
    navigationOptions: {
      title: 'Entrepot'
    }
  },
  Achat: {
    screen: Achat,
    navigationOptions: {
      title: 'Achat'
    }
  },
  Vente: {
    screen: Vente,
    navigationOptions: {
      title: 'Vente'
    }
  }
})

export default createAppContainer(SearchStackNavigator);