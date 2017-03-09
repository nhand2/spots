// Spots GUI Prototype JS code

import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';
import Login from './components/Login';
import Main from './components/Main';
import CheckIn from './components/CheckIn';

export default class Spots extends Component {

    renderScene(route, navigator) {
        switch(route.page) {
            case 'Login':
                return (
                    <View style={{flex: 1}}>
                        <Login navigator={navigator} title="Login" />
                    </View>
                )
            case 'Main':
                return (<Main navigator={navigator} title="Main" username={route.username} password={route.password} />)
            case 'CheckIn':
                return (<CheckIn navigator={navigator} title="CheckIn"/>)
        }
    }

    render() {

        return (
            <Navigator
            initialRoute={{page: 'Login'}}
            renderScene={this.renderScene}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
            />
        )
    }
}

AppRegistry.registerComponent('Spots', () => Spots);