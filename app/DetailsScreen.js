// @flow

import React, {Component} from "react";
import {Text, View} from "react-native";
import * as css from "./Styles";

export class DetailsScreen extends Component {
  
  static navigationOptions = {
    title: `Weather Details Screen`
  };
  
  render() {
    const msg1 = `Weather Details Screen`;
    const msg2 = `This is where weather details go`;
    
    return (
      <View style={css.global.v_container}>
        <Text style={css.global.heading}>{msg1}</Text>
        <Text style={css.global.body}>{msg2}</Text>
      </View>
    );
  }
  
}