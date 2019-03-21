import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { connect } from 'react-redux'

class GraphicGame extends React.Component {
  constructor(props){
    super(props)
    this.arr=[require('../images/hangamarabg.png'),require('../images/conteneurbg.png'),require('../images/hangamarabg.png')]; 
  }
  render() {
    return (
      <View style={styles.graphicGame}>
        <Image style={{width: '100%',height: '100%', resizeMode:'contain'}} source={this.arr[this.props.level]}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  graphicGame: {
    height: '84%'
  }
});
const mapStateToProps = (state) => {
  return {
    level: state.level,
  }
}
export default connect(mapStateToProps)(GraphicGame)