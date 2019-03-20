import { createStackNavigator, createAppContainer } from 'react-navigation'
import Shop from '../components/Shop'
import Achat from '../components/Achat'
import Vente from '../components/Vente'
import Entrepot from '../components/Entrepot'
import Game from '../components/Game'
import Succes from '../components/Succes'
import Login from '../components/Login'

const SearchStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      title: 'Game',
      gesturesEnabled: true,
      
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: 'Shop',
      gesturesEnabled: true,
    }
  },
  Entrepot: {
    screen: Entrepot,
    navigationOptions: {
      title: 'Entrepot',
      gesturesEnabled: true,
    }
  },
  Achat: {
    screen: Achat,
    navigationOptions: {
      title: 'Achat',
      gesturesEnabled: true,
    }
  },
  Vente: {
    screen: Vente,
    navigationOptions: {
      title: 'Vente',
      gesturesEnabled: true,
    }
  },
  Succes: {
    screen: Succes,
    navigationOptions: {
      title: 'Succes',
      gesturesEnabled: true,
    }
  }
})

export default createAppContainer(SearchStackNavigator);