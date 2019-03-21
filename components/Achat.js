import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemShop from './ItemShop'
import { connect } from 'react-redux'

class Achat extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
      {
          this.props.achat.map((item,index)=>(
         <ItemShop key={index} Name={item.name} Prix={item.prix} Taille="2"/>)
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
    achat: state.achat
  }
}

export default connect(mapStateToProps)(Achat)