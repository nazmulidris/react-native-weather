// @flow

import React, {Component} from "react";
import {Text, View} from "react-native";
import * as css from "./Styles";

export class DetailsScreen2 extends Component {
  
  static navigationOptions = {
    title: `WEEKLY`,
  };
  
  render() {
  
    const {currentTemp, icon, iconColor, key, place, time} =
      this.props.navigation.state.params;
  
    const msg1 = `Details 2`;
    const msg2 = `${place}, ${time}, Temp:${currentTemp}`;
  
    return (
      <View style={css.global.v_container}>
        <Text style={css.global.title}>{msg1}</Text>
        <Text style={css.global.body1}>{msg2}</Text>
      </View>
    );
  
  }
  
}