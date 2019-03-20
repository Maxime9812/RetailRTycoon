import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class GraphicGame extends React.Component {
    addCoin() {
    const action = { type: "ADD_COIN", value: 1 }
    this.props.dispatch(action)
  }

  render() {
    return (
    	<TouchableOpacity onPress={() => this.addCoin()} style={styles.graphicGame}>
    	</TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  graphicGame: {
  	backgroundColor: 'black',
  	height: '80%'
  }
});
const mapStateToProps = (state) => {
  return {
    coin: state.coin,
    lingots: state.lingots
  }
}
export default connect(mapStateToProps)(GraphicGame)