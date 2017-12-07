import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TestValue: "Ahmet"
    }
  }
  test() {
    Alert.alert("A Message", "Test Contetn title");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Init commit</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


});
