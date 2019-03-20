import React from 'react'
import {StyleSheet,Button,Text,View,Linking} from 'react-native'

export default class ItemEntrepot extends React.Component {
 render() {
 	const{Name,Nombre} = this.props
  return (
  	<View style={styles.containe}>
  		<View style={{backgroundColor:'red',width:65,height:65,borderRadius:5,marginLeft:3}}/>
	  	<View style={styles.text}>
			<Text style={styles.titre}>{Name}</Text>
			<Text style={styles.info}>{Nombre}</Text>
		</View>
   	</View>
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