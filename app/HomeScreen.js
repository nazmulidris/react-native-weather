// @flow

import React, {Component} from "react";

import {AppRegistry, StatusBar, Text, View} from "react-native";

import * as css from "./Styles";

import {StackNavigator} from "react-navigation";

// export class MainScreen extends Component {
//   render() {
//     const msg1 = `Weather App`;
//     const msg2 = `More coming soon!`;
//
//     return (
//       <View style={css.homescreen.v_container}>
//         <StatusBar hidden={true} translucent={true} animated={true}
//                    barStyle={'light-content'} backgroundColor={'#455a64'}/>
//         <Text style={css.homescreen.heading}>{msg1}</Text>
//         <Text style={css.homescreen.body}>{msg2}</Text>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('WeatherApp', () => MainScreen);

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Weather App',
  };
  
  render() {
    const msg1 = `More coming soon!`;
    
    return (
      <View style={css.homescreen.v_container}>
        <Text style={css.homescreen.heading}>{msg1}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator(
  {
    Home: {screen: HomeScreen},
  });

AppRegistry.registerComponent('WeatherApp', () => SimpleApp);