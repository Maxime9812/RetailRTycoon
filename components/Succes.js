import React from 'react'
import {Button,Text,ScrollView,StyleSheet} from 'react-native'
import ItemSucces from './ItemSucces'
import { connect } from 'react-redux'

class Succes extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {
          this.props.succes.map((item,index)=>(
         <ItemSucces key={index} Titre={item.titre} Info={item.info}/>)
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