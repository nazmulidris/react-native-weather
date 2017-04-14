// @flow

import React, {Component} from "react";
import {Text, View} from "react-native";
import * as css from "./Styles";

export class SettingsScreen extends Component {
  
  static navigationOptions = {
    title: `App Settings`,
  };
  
  render() {
    const msg1 = `Settings Screen`;
    const msg2 = `Show settings here`;
    
    return (
      <View style={css.global.v_container}>
        <Text style={css.global.title}>{msg1}</Text>
        <Text style={css.global.body1}>{msg2}</Text>
      </View>
    );
  }
  
}