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
      headerStyle: {
        backgroundColor: 'black',
        height: null,
      },
      headerLeft: null
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: 'black',
        height: null
      },
      headerLeft: null
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: 'black',
        height: null
      },
      headerLeft: null
    }
  },
  Entrepot: {
    screen: Entrepot,
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: 'black',
        height: null
      },
      headerLeft: null
    }
  },
  Achat: {
    screen: Achat,
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: 'black',
        height: null
      },
      headerLeft: null
    }
  },
  Vente: {
    screen: Vente,
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: 'black',
        height: null
      },
      headerLeft: null
    }
  },
  Succes: {
    screen: Succes,
    navigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
        backgroundColor: 'black',
        height: null
      },
      headerLeft: null
    }
  }
})

export default createAppContainer(SearchStackNavigator);