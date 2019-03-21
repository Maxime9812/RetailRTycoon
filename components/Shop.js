import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemShop from './ItemShop'
import { connect } from 'react-redux'

class Shop extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {
          this.props.shop.map((item,index)=>(
         <ItemShop key={item.id} Name={item.name} Prix={item.prix} Taille="2" Info={item.info}/>)
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
    shop: state.shop
  }
}

export default connect(mapStateToProps)(Shop)