import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class InfoBar extends React.Component {
  render() {
  	const {coin,lingots} = this.props
    return (
    	<View style={styles.infoBar}>
    		<Text>coins: {coin}</Text>
    		<Text>lingots: {lingots}</Text>
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