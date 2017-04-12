// @flow

import React, {Component} from "react";
import {Button, StatusBar, Text, ToastAndroid, View} from "react-native";
import * as css from "./Styles";

export class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Weather App',
  };
  
  render() {
    const msg1 = `Home screen`;
    const msg2 = `More coming soon!`;
    
    return (
      <View style={css.global.v_container}>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.statusbar_bg_color}
        />
    
        <Text style={css.global.heading}>{msg1}</Text>
    
        <Text style={css.global.body}>{msg2}</Text>
    
        <View style={css.global.h_container}>
          <Button
            color={css.colors.button_bg_color}
            onPress={() => this.props.navigation.navigate(`DetailsScreen`)}
            title="Detail Screen"
          />
          <Button
            color={css.colors.button_bg_color}
            onPress={() => ToastAndroid.show("Info button pressed", 10000)}
            title="Info"
          />
        </View>
      </View>
    );
  }
  
}