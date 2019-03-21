import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemVente from './ItemVente'
import { connect } from 'react-redux'

class Vente extends React.Component {
  render() {
  	var id = 0
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {
        	this.props.entrepot.map((item)=>(
         <ItemVente key={item.id} Name={item.name} Prix={this.props.prix[item.id]}Nombre={item.nombre} Taille={item.taille}/>)
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