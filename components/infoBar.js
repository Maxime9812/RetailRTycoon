import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class InfoBar extends React.Component {
  render() {
  	const {coin,lingots,navigation} = this.props
    return (
    	<View style={styles.infoBar}>
    		<TouchableOpacity onPress={() => navigation('Succes')}><Text>Succes</Text></TouchableOpacity>
    		<Text>Coins: {coin}</Text>
    		<Text>Lingots: {lingots}</Text>
    	</View>
    );
  }
}
const styles = StyleSheet.create({
  infoBar: {
  	backgroundColor: 'grey',
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	height: '7%',
  	alignItems: 'center'
  }
});
const mapStateToProps = (state) => {
  return {
    coin: state.coin,
    lingots: state.lingots
  }
}
export default connect(mapStateToProps)(InfoBar)