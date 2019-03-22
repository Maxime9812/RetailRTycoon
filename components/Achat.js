import React from 'react'
import {Button,Text,ScrollView,StyleSheet,View} from 'react-native'
import ItemAchat from './ItemAchat'
import { connect } from 'react-redux'

const IMAGES = [require('../images/usb.png'),
                require('../images/montre.png'),
                require('../images/steak.png'),
                require('../images/game-console.png'),
                require('../images/camera.png'),
                require('../images/8ktv.png'),
                require('../images/iphone.png'),
                require('../images/macbook.png'),
                require('../images/gaming.png'),
                require('../images/shoes.png'),
                require('../images/hand-bag.png'),
                require('../images/16ktv.png'),
                require('../images/automobile.png'),
                require('../images/goldeniphone.png'),
                ]

class Achat extends React.Component {

  addItemAchat(key,name,prix,taille,disabled){
  return disabled?<ItemAchat Source={IMAGES[key]} id={key} key={key} Name={name} Prix={prix} Taille={taille} Disabled={true}/>:<ItemAchat Source={IMAGES[key]} id={key} key={key} Name={name} Prix={prix} Taille={taille} Disabled={false}/>
}
  generateItemAchat(){
  const {entrepotSize,level,emplacement,prix,coin,achat} = this.props
  return achat.map((item)=>(
         prix[item.id]<= coin && emplacement+item.taille <= entrepotSize[level-1]?this.addItemAchat(item.id,item.name,this.props.prix[item.id],item.taille,false):this.addItemAchat(item.id,item.name,this.props.prix[item.id],item.taille,true))
         )
}
  render() {
    const {navigate} = this.props.navigation;
    const {entrepotSize,level,emplacement,coin} = this.props
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'white'}}>
              <Text>Emplacement: {emplacement}/{entrepotSize[level-1]}</Text>
              <Text>coin: {coin}</Text>
            </View>
          <ScrollView>
            {this.generateItemAchat()}
          </ScrollView>
        </View>
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
    coin: state.coin,
    achat: state.achat,
    prix: state.prix,
    emplacement: state.emplacement,
    level: state.level,
    entrepotSize: state.entrepotSize
  }
}

export default connect(mapStateToProps)(Achat)