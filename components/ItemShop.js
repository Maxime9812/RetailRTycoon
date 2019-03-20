import React from 'react'
import {StyleSheet,Button,Text,View,Linking} from 'react-native'

export default class About extends React.Component {
  render() {
    return (
    	<View style={styles.containe}>
    		<View style={styles.info}>
		      <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/williamandrieu')}>William</Text>
		      <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/MathisTimo')}>Mathis</Text>
		      <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/Maxime9812')}>Maxime</Text>
	      	</View>
      	</View>
    );
  }
}
const styles = StyleSheet.create({
	text:{
		marginBottom: 10,
		fontSize: 25,
		color: 'white'
	},
	containe:{
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#273751'

	},
	info:{
		flex: 1,
		flexDirection: 'column'
	}
})