import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MainPage from '../app/pages/MainPage'
import {AsyncStorage,Text,View} from 'react-native'

class App extends Component {
  
    render() {


        return (
            <Router>
                <Scene  key="root">
                    <Scene key="testPage" component={MainPage} title={"Title- Test- Page"}/>
                </Scene>
            </Router>
        );
    }
}

export default App;