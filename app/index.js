import React, {Component} from 'react';
import  {StyleSheet} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import MainPage from '../app/pages/MainPage';
import LoginPage from '../app/pages/LoginPage';
class App extends Component {

    render() { 
        return (           
            <Router>
                <Scene  key="root" >
                    <Scene key="testPage" navigationBarStyle={styleNav.Nav} titleStyle={styleNav.NavText} component={MainPage} title={"Title- Test- Page"}/>
                    <Scene key="loginPage" navigationBarStyle={styleNav.Nav} titleStyle={styleNav.NavText} iconStyle={{color:"white"}} component={LoginPage} title={"Login Page"}/>
                </Scene>
            </Router>
        );
    }
}

export default App;
const styleNav = StyleSheet.create({

    Nav: {
        textAlign:"center",
        backgroundColor:"#F68657",
    },
    NavText:{
fontSize:15,
        color:"white"
    }
});