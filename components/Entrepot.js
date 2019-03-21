import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemEntrepot from './ItemEntrepot'
import { connect } from 'react-redux'

class Entrepot extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {
        	this.props.entrepot.map((item,index)=>(
         <ItemEntrepot key={index} Name={item.name} Nombre={item.nombre}/>)
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
    entrepot: state.entrepot
  }
}

export default connect(mapStateToProps)(Entrepot)