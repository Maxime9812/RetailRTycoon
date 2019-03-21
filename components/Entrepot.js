import React from 'react'
import {View,Button,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import ItemEntrepot from './ItemEntrepot'
import { connect } from 'react-redux'

class Entrepot extends React.Component {

   constructor(props) {
    super(props);
    this.state = { MenuObject: true };
}
    render() {
    if (!this.state.MenuObject) {
      return( 
        <View style={{height: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around',height: '8%',alignItems: 'center',backgroundColor: '#472aa8',textColor: 'white'}}>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: true})}}><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20, opacity: 0.7}}>Mes Object</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: false})}} ><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20}}>Entrepots</Text></TouchableOpacity>
          </View>

        </View>
       )
    }else{
          const {navigate} = this.props.navigation;
          const {emplacement, entrepotSize} = this.props
          console.log(this.props.entrepot)
    return (
      <View style={{height: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around',height: '8%',alignItems: 'center',backgroundColor: '#472aa8',textColor: 'white'}}>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: true})}}><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20}}>Mes Object</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: false})}} ><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20, opacity: 0.7}}>Entrepots</Text></TouchableOpacity>
          </View>
          <Text>Emplacement: {emplacement}/{entrepotSize[0]}</Text>
            <ScrollView style={styles.container}>
            {
              this.props.entrepot.map((item,index)=>(
             <ItemEntrepot key={index} Name={item.name} Nombre={item.nombre}/>)
             )
            }
           </ScrollView>
      </View>
    );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273751',
    flex: 1,
    height: '300%'
  }
});

const mapStateToProps = (state) => {
  return {
    entrepot: state.entrepot,
    entrepotSize: state.entrepotSize,
    emplacement: state.emplacement
  }
}

export default connect(mapStateToProps)(Entrepot)