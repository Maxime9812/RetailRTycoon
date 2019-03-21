import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemAchat from './ItemAchat'
import { connect } from 'react-redux'

class Achat extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
      {
          this.props.achat.map((item)=>(
         <ItemAchat key={item.id} Name={item.name} Prix={this.props.prix[item.id]} Taille={item.taille} id={item.id}/>)
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
    achat: state.achat,
    prix: state.prix
  }
}

export default connect(mapStateToProps)(Achat)