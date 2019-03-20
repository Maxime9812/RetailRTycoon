import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import InfoBar from './infoBar'
import MenuBar from './MenuBar'
import GraphicGame from './GraphicGame'
import { connect } from 'react-redux'

class Game extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
    	<View style={styles.game}>
        <InfoBar navigation={navigate}/>
        <GraphicGame/>
        <MenuBar navigation={navigate}/>
    	</View>
    );
  }
}
const styles = StyleSheet.create({
  game: {
  	backgroundColor: '#273751',
    flex: 1

  }
});

const mapStateToProps = (state) => {
  return {
    coin: 0
  }
}

export default connect(mapStateToProps)(Game)