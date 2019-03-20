import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'

export default class MenuBar extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props
    return (
    	<View style={styles.infoBar}>
    		<TouchableOpacity onPress={() => navigation('Entrepot')}><Text>Entrepot</Text></TouchableOpacity>
    		<TouchableOpacity onPress={() => navigation('Achat')}><Text>Achat</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation('Vente')}><Text>Vente</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation('Shop')}><Text>Shop</Text></TouchableOpacity>
    	</View>
    );
  }
}
const styles = StyleSheet.create({
  infoBar: {
  	backgroundColor: 'grey',
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	height: '13%',
  	alignItems: 'center'
  }
});