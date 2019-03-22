import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemSucces from './ItemSucces'
import { connect } from 'react-redux'

const IMAGES = [require('../images/usb.png'),
                require('../images/warehouse.png'),
                require('../images/jeff.png'),
                require('../images/steak.png'),
                require('../images/ads.png'),
                require('../images/ingots.png'),
                require('../images/beastmaster.jpg'),
                require('../images/69.png'),
                require('../images/goldeniphone.png'),
                require('../images/gladiator.png'),
                ]

class Succes extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {
          this.props.succes.map((item,index)=>(
         <ItemSucces key={index} Titre={item.titre} Source={IMAGES[item.id]} Info={item.info} NbReward={item.reward.length} Level={item.level}/>)
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
    succes: state.succes,
  }
}

export default connect(mapStateToProps)(Succes)