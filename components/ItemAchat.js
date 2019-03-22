import React from 'react'
import {StyleSheet,Button,Text,View,Image,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class ItemAchat extends React.Component {
	removeCoin() {
    const action = { type: "REMOVE_COIN", value: this.props.Prix}
    this.props.dispatch(action)

  }
  addSucces(id) {
	var action = { type: "ADD_SUCCES", id:id}
    this.props.dispatch(action)
    var succesWin = this.props.succes.find(item => item.id=== id)
    action = { type: "ADD_COIN", value:succesWin.reward[succesWin.level]}
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
  verifBuySucces(){
  	var targetMySucces = this.props.mySucces.find(item => item.objetId=== this.props.id)
  	if(targetMySucces != undefined){
  		var targetSucces = this.props.succes.find(item => item.id=== targetMySucces.idSucces)
  		if(targetSucces.level < targetSucces.reward.length){
  			var action = { type: "ADD_MYSUCCES",id:this.props.id}
		    this.props.dispatch(action)
		    if(targetMySucces.nb === targetSucces.value[targetSucces.level]-1){
		    	this.addSucces(targetSucces.id)
		    }
  		}
  	}
  }
  buyItem(){
	this.removeCoin()
	this.addItem()
	this.addEmplacement()
	this.verifBuySucces()
  }
  render() {
  	const {Name, Prix, Taille,Disabled,Source} = this.props
  		return (
    	<View style={{alignItems: 'center', opacity: Disabled ? 0.2 : 1 }}>
    	<TouchableOpacity disabled={Disabled} style={styles.containe} onPress={() => this.buyItem()}>
    		<Image style={{width:60,height:60,borderRadius:5,marginLeft:3}} source={Source}/>
	    		<View style={{marginLeft:15,flex:1}}>
			  	  <Text style={styles.titre}>{Name}</Text>
			  	  <Text style={styles.taille}><Image source={require('../images/size.png')} style={{width:22,height:22}}/>   {Taille}</Text>
			    </View>
			  <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>   	
		        	<Text style={styles.text}>{Prix}  <Image source={require('../images/dollar.png')} style={{width:24,height:24}}/></Text>
			    	</View>
		    </TouchableOpacity>
		</View>
    );
  }
}
const styles = StyleSheet.create({
	titre:{
		marginBottom: 1,
		marginLeft:6,
		fontSize: 18,
		color: 'white',
		fontFamily: 'Roboto',
	    fontWeight:'700',
	},
	text:{

		marginBottom: 1,
		fontSize: 20,
		marginLeft:6,
		color: 'white',
		fontFamily: 'Roboto',
	    fontWeight:'700',
	},
		taille:{

		marginBottom: 1,
		fontSize: 17,
		marginTop: 4,
		marginLeft:6,
		color: 'white',
		fontFamily: 'Roboto',
	    fontWeight:'700',
	},
	containe:{
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#273751',
		flexDirection:'row',
		height:80,
		width: '80%',
		borderRadius: 4,
	    marginTop: 10
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
    level: state.level,
    mySucces: state.mySucces,
    succes:state.succes

  }
}
export default connect(mapStateToProps)(ItemAchat)