import React from 'react'
import {StyleSheet,Button,Text,View,Image} from 'react-native'

export default class About extends React.Component {
 render() {
 	const{Titre,Info,NbReward} = this.props
 	console.log(this.props)
  return (
  	<View style={styles.containe}>
  		<Image style={{width:65,height:65,borderRadius:5,marginLeft:3}} source={require('../ICON/APPICON2.png')}/>
	  	<View style={styles.text}>
			<Text style={styles.titre}>{Titre}</Text>
			<Text style={styles.info}>{Info}</Text>
		</View>
		<Text style={styles.titre}>0/{NbReward}</Text>
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