import React from 'react'
import {StyleSheet,Button,Text,View,Linking,Image,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class ItemShop extends React.Component {
	removeCoin() {
    const action = { type: "ADD_ITEM", value: 1,name: this.props.Name }
    this.props.dispatch(action)

  }
  render() {
  	const {Name, Prix, Taille} = this.props
    return (
    	<TouchableOpacity style={styles.containe} onPress={() => this.removeCoin()}>
    		<Image source={{uri :'http://images.math.cnrs.fr/IMG/png/section8-image.png'}}/>
	    		<View style={{marginLeft:15,flex:1}}>
			    <Text style={styles.titre}>{Name}</Text>
			    	<View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
				    	<Text style={styles.text}>Prix : {Prix}$</Text>
				    	<Text style={styles.text}>Taille : {Taille}</Text>
			    	</View>
			    </View>
		    </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
	titre:{
		marginBottom: 1,
		marginLeft:6,
		fontSize: 15,
		color: 'white'
	},
	text:{
		marginBottom: 1,
		fontSize: 15,
		marginLeft:6,
		color: 'white'
	},
	containe:{
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#273751',
		flexDirection:'row',
		height:70,
		borderRadius: 4,
	    borderWidth: 0.5,
	    borderColor: '#d6d7da',
	    


	},
	info:{
		flex: 1,
		flexDirection: 'column'
	}
})
const mapStateToProps = (state) => {
  return {
    coin: state.coin
  }
}
export default connect(mapStateToProps)(ItemShop)