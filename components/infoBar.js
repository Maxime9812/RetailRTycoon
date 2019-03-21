import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { connect } from 'react-redux'

class InfoBar extends React.Component {
  render() {
    const {coin,lingots,navigation} = this.props
    return (
      <View style={styles.infoBar}>
        <TouchableOpacity onPress={() => navigation('Succes')}><Image style={{width: 25,height: 25, resizeMode:'contain'}} source={require('../images/award.png')}/></TouchableOpacity>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image style={{width: 25,height: 25, resizeMode:'contain'}} source={require('../images/dollar.png')}/>
          <Text style={{fontFamily: 'Roboto', fontWeight:'700',fontSize:25, color:'white', marginLeft:10}}>{coin}</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image style={{width: 25,height: 25, resizeMode:'contain'}} source={require('../images/ingot.png')}/>
          <Text style={{fontFamily: 'Roboto', fontWeight:'700',fontSize:25, color:'white', marginLeft:10}}>{lingots}</Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoBar: {
    backgroundColor: '#472aa8',
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