import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { connect } from 'react-redux'
import { AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner } from "expo";

const REWARDED_ID = `ca-app-pub-4711066506510029/2477283826`;

AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID("EMULATOR");


class InfoBar extends React.Component {

    _openRewarded = async () => {
      console.log('1');
    await AdMobRewarded.requestAdAsync();
    console.log('2');
    setTimeout(() => {this.addLingots()}, 10000);
    await AdMobRewarded.showAdAsync();
    console.log('3');
    };

  addLingots(){
    const action = {type: "ADD_LINGOTS",value: 10};
    this.props.dispatch(action);
  }

  render() {
    const {coin,lingots,navigation} = this.props
    return (
      <View style={styles.infoBar}>
        <TouchableOpacity onPress={() => navigation('Succes')}><Image style={{width: 25,height: 25, resizeMode:'contain'}} source={require('../images/award.png')}/></TouchableOpacity>
          <View style={{fontFamily: 'Roboto', flexDirection: 'row',alignItems: 'center'}}>
          <Image style={{width: 25,height: 25, resizeMode:'contain'}} source={require('../images/dollar.png')}/>
          <Text style={{fontFamily: 'Roboto', fontWeight:'700',fontSize:25, color:'white', marginLeft:10}}>{coin}</Text>
          </View>
          <View style={{fontFamily: 'Roboto', flexDirection: 'row',alignItems: 'center'}}>
          <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}} onPress={() => this._openRewarded()}><Image style={{width: 25,height: 25, resizeMode:'contain'}} source={require('../images/ingot.png')}/>
          <Text style={{fontFamily: 'Roboto', fontWeight:'700',fontSize:25, color:'white', marginLeft:10}}>{lingots}</Text></TouchableOpacity>
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