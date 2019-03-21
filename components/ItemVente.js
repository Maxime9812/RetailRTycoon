import React from 'react'
import {StyleSheet,Button,Text,View,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class ItemVente extends React.Component {
	addCoin() {
    const action = { type: "ADD_COIN", value: 10}
    this.props.dispatch(action)
    this.removeItem()
  }
  removeItem() {
    const action = { type: "REMOVE_ITEM", name:this.props.Name , value: 1}
    this.props.dispatch(action)

  }
 render() {
 	const{Name,Nombre} = this.props
  return (
  	<TouchableOpacity style={styles.containe} onPress={() => this.addCoin()}>
  		<View style={{backgroundColor:'red',width:65,height:65,borderRadius:5,marginLeft:3}}/>
	  	<View style={styles.text}>
			<Text style={styles.titre}>{Name}</Text>
			<Text style={styles.info}>{Nombre}</Text>
		</View>
   	</TouchableOpacity>
  );
 }
}
const styles = StyleSheet.create({
	titre:{
		marginBottom: 1,
		fontSize: 20,
		color: 'white'
	},
	info:{
		marginBottom: 1,
		fontSize: 14,
		color: 'grey',

	},
	containe:{
		alignItems: 'center',
		backgroundColor: '#273751',
		flexDirection:'row',
		height:70,
		borderRadius: 4,
	  	borderWidth: 0.5,
	  	borderColor: '#d6d7da',
	},text:{
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
})
const mapStateToProps = (state) => {
  return {
    coin: state.coin
  }
}
export default connect(mapStateToProps)(ItemVente)