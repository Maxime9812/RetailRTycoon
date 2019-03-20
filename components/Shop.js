import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemShop from './ItemShop'

export default class Shop extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <ItemShop/>
        <ItemShop/>
        <ItemShop/>
        <ItemShop/>
        <ItemShop/>
        <ItemShop/>
        <ItemShop/>
        <ItemShop/>
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