import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      loading: true,
    }
    this.login = this.login.bind(this);
  }

  componentDidMount() {

  }
  componentWillMount() {

  }
  login() {
    alert("Loggin Success");
  }

  render() {
    return (
      <View>
        <Text>coming text inputs </Text>

        <TouchableOpacity  onPress={() => this.login}>
          <View>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default MainPage;