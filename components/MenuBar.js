import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Image, ImageBackground} from 'react-native'

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.infoBar}>
        <TouchableOpacity onPress={() => navigation('Entrepot')}><Image style={{width: 45,height: 45, resizeMode:'contain'}} source={require('../images/warehouse.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation('Achat')}><Image style={{width: 45,height: 45, resizeMode:'contain'}} source={require('../images/buy.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation('Vente')}><Image style={{width: 45,height: 45, resizeMode:'contain'}} source={require('../images/sell.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation('Shop')}><Image style={{width: 45,height: 45, resizeMode:'contain'}} source={require('../images/shop.png')}/></TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoBar: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '9%',
    alignItems: 'center'
  }
});
