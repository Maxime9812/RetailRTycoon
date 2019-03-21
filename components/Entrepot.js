import React from 'react'
import {View,Button,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import ItemEntrepot from './ItemEntrepot'
import { connect } from 'react-redux'
import ItemEntrepotUp from './ItemEntrepotUp'

const IMAGES = [require('../images/usb.png'),
                require('../images/montre.png'),
                require('../images/steak.png'),
                require('../images/game-console.png'),
                require('../images/camera.png'),
                require('../images/8ktv.png'),
                require('../images/iphone.png'),
                require('../images/macbook.png'),
                require('../images/gaming.png'),
                require('../images/shoes.png'),
                require('../images/hand-bag.png'),
                require('../images/16ktv.png'),
                require('../images/automobile.png'),
                require('../images/goldeniphone.png'),
                ]
const IMAGESENTREPOT = [require('../images/2.png'),
                require('../images/3.png'),
                require('../images/4.png'),
                require('../images/5.png'),
                require('../images/6.png'),
                ]

class Entrepot extends React.Component {

   constructor(props) {
    super(props);
    this.state = { MenuObject: true };
}
addEntrepoUp(index,name,prix,info,disabled){
  return disabled?<ItemEntrepotUp Source={IMAGESENTREPOT[index]} key={index} Name={name} Prix={prix} Info={info} Disabled={true}/>:<ItemEntrepotUp Source={IMAGESENTREPOT[index]} key={index} Name={name} Prix={prix} Info={info} Disabled={false}/>
}

    render() {
      console.log(this.props.entrepot)
    if (!this.state.MenuObject) {
      return( 
        <View style={{height: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around',height: '8%',alignItems: 'center',backgroundColor: '#472aa8',textColor: 'white'}}>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: true})}}><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20, opacity: 0.7}}>Mes Object</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: false})}} ><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20}}>Entrepots</Text></TouchableOpacity>
          </View>
          <ScrollView style={styles.container}>
            {
              this.props.entrepotUp.map((item,index)=>(
             item.prix<= this.props.coin ? this.addEntrepoUp(index,item.name,item.prix,item.info,false) : this.addEntrepoUp(index,item.name,item.prix,item.info,true)
             )
             )
            }
           </ScrollView>
        </View>
       )
    }else{
          const {navigate} = this.props.navigation;
          const {emplacement, entrepotSize,level} = this.props
    return (
      <View style={{height: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around',height: '8%',alignItems: 'center',backgroundColor: '#472aa8',textColor: 'white'}}>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: true})}}><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20}}>Mes Object</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState({MenuObject: false})}} ><Text style={{color: 'white',fontFamily: 'Roboto', fontWeight:'700',fontSize:20, opacity: 0.7}}>Entrepots</Text></TouchableOpacity>
          </View>
          <Text>Emplacement: {emplacement}/{entrepotSize[level-1]}</Text>
            <ScrollView style={styles.container}>
            {
              this.props.entrepot.map((item,index)=>(
             <ItemEntrepot Source={IMAGES[item.id]} key={item.id} Name={item.name} Nombre={item.nombre}/>)
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
    coin: state.coin,
    entrepot: state.entrepot,
    entrepotSize: state.entrepotSize,
    emplacement: state.emplacement,
    entrepotUp: state.entrepotUp,
    level: state.level
  }
}

export default connect(mapStateToProps)(Entrepot)