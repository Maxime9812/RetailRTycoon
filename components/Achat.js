import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemShop from './ItemShop'

export default class Achat extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <ItemShop Name="pot" Prix="30000" Taille="2"/>
        <ItemShop Name="Mathi" Prix="10" Taille="2"/>
        <ItemShop Name="Maxi" Prix="30000" Taille="2"/>
        <ItemShop Name="LILI" Prix="30000" Taille="2"/>
        <ItemShop Name="PIPI" Prix="30000" Taille="2"/>
        <ItemShop Name="GLUMUX" Prix="30000" Taille="2"/>
        <ItemShop Name="ridux" Prix="30000" Taille="2"/>
        <ItemShop Name="walidumixux" Prix="30000" Taille="2"/>
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