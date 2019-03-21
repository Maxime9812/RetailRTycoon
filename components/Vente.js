import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemVente from './ItemVente'
import { connect } from 'react-redux'

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

class Vente extends React.Component {
  render() {
  	var id = 0
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {
        	this.props.entrepot.map((item)=>(
         <ItemVente Source={IMAGES[item.id]}key={item.id} Name={item.name} Prix={this.props.prix[item.id]}Nombre={item.nombre} Taille={item.taille}/>)
         )
        }
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273751',
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return {
    entrepot: state.entrepot,
    prix: state.prix
  }
}

export default connect(mapStateToProps)(Vente)