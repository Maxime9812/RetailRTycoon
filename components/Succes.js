import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemSucces from './ItemSucces'

export default class Succes extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <ItemSucces/>
        <ItemSucces/>
        <ItemSucces/>
        <ItemSucces/>
        <ItemSucces/>
        <ItemSucces/>
        <ItemSucces/>
        <ItemSucces/>
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