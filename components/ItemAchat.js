import React from 'react'
import {StyleSheet,Button,Text,View,Image,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class ItemAchat extends React.Component {
	removeCoin() {
    const action = { type: "REMOVE_COIN", value: this.props.Prix,name: this.props.Name }
    this.props.dispatch(action)

  }
  addItem() {
    const action = { type: "ADD_ITEM", value: 1,name: this.props.Name, taille:this.props.Taille,id: this.props.id }
    this.props.dispatch(action)

  }
  addEmplacement() {
    const action = { type: "ADD_EMPLACEMENT", value: this.props.Taille}
    this.props.dispatch(action)

  }
  buyItem(){
  	const {emplacement, Taille,entrepotSize,level,coin,Prix} = this.props
  	if(emplacement + Taille <= entrepotSize[level] && coin >= Prix){
  		this.removeCoin()
  		this.addItem()
  		this.addEmplacement()
  	}
  }
  render() {
  	const {Name, Prix, Taille} = this.props
    return (
    	<TouchableOpacity style={styles.containe} onPress={() => this.buyItem()}>
    		<Image style={{width:65,height:65,borderRadius:5,marginLeft:3}} source={require('../ICON/APPICON2.png')}/>
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
    coin: state.coin,
    emplacement: state.emplacement,
    entrepotSize: state.entrepotSize,
    level: state.level

  }
}
export default connect(mapStateToProps)(ItemAchat)