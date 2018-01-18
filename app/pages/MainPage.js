import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={loginStyle.Wrapper}>
        <TouchableOpacity style={loginStyle.LoginTouch} onPress={() => Actions.loginPage()}>
          <Text style={loginStyle.loginText}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default MainPage;

const loginStyle = StyleSheet.create({
  Wrapper:{
      flex:1,
      justifyContent:"center"
    },
  LoginTouch: {
      padding:10,
      margin:10,
      backgroundColor:"#F68657",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:50,
  },
  loginText: {
      fontSize:25,
      color:"white"
  }
});
