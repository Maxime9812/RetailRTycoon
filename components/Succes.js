import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemSucces from './ItemSucces'

export default class Succes extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <ItemSucces Titre="Noob" Info="Reach level 2"/>
        <ItemSucces Titre="Beginner" Info="Reach level 3"/>
        <ItemSucces Titre="Expert" Info="Reach level 4"/>
        <ItemSucces Titre="Master" Info="Reach level 5"/>
        <ItemSucces Titre="Angamara" Info="Reach level 10"/>
        <ItemSucces Titre="Mathis" Info="Loose 100$"/>
        <ItemSucces Titre="Beginner" Info="Reach level 2"/>
        <ItemSucces Titre="Beginner" Info="Reach level 2"/>
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