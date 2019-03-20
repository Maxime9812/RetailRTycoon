import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
    super(props);
    this.state = { username: '', password: ''};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/LoginBG.png')} style={{width: '100%', height: '100%'}}>
          <View style={{flex: 1,marginTop: '50%', alignItems: 'center', paddingBottom:10}}>
            <TextInput
            style={styles.logininput}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder='Username'
            />
            <TextInput
            style={styles.logininput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder='Password'
            />
              <TouchableOpacity style={styles.loginbutton} onPress={() =>navigate('Game') }>
                <Text style={styles.logintext}>Login</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logininput: {
    height: '15%', 
    width: '80%',
    backgroundColor: 'white', 
    borderRadius: 10,
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  logintext:{
    fontSize: 25,
    textAlign: 'center',
  },
  loginbutton:{
    height: '15%', 
    width: '80%',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'white', 
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
