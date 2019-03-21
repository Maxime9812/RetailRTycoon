import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Image,Alert} from 'react-native'
import { connect } from 'react-redux'
import * as Progress from 'react-native-progress';

const IMAGES = [require('../images/conteneurbg.png'),
                require('../images/greywarehousebg.png'),
                require('../images/yellowwarehousebg.png'),
                require('../images/bluewarhousebg.png'),
                require('../images/whitewarhousebg.png'),
                require('../images/hangamarabg.png')
                ]

class GraphicGame extends React.Component {
  pressButton(){
    if (this.props.point+1 > 100*parseInt(this.props.level)) 
    {
      this.addLevel();
      Alert.alert('Bravo vous etes passé niveau '+ parseInt(this.props.level));
      this.removeAllPoint();
    }else
    {
      this.addPoint();
    }

  }

  addPoint(){
    const action = {type: 'ADD_POINT',value: 1}
    this.props.dispatch(action);
  }
  removeAllPoint(){
    const action = {type: 'REMOVE_ALL_POINT'}
    this.props.dispatch(action);
  }

    addLevel(){
    const action = {type: 'ADD_LEVEL',value: 1}
    this.props.dispatch(action);
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.graphicGame} onPress={() => { this.pressButton()}}>
         <Progress.Bar progress={((this.props.point / this.props.level)/100)} width={null} borderWidth={0} />
        <Image style={{width: '100%',height: '100%', resizeMode:'contain'}} source={IMAGES[(this.props.level)-1]}/>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  graphicGame: {
    height: '84%',
    backgroundColor: 'green'
  }
});
const mapStateToProps = (state) => {
  return {
    level: state.level,
    point: state.point
  }
}
export default connect(mapStateToProps)(GraphicGame)