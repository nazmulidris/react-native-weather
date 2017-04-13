// @flow

import React, {Component} from "react";
import {Text, View} from "react-native";
import * as css from "./Styles";

export class DetailsScreen2 extends Component {
  
  static navigationOptions = {
    title: `Details Screen 2`,
  };
  
  render() {
    const msg1 = `Details 2`;
    
    const {params} = this.props.navigation.state;
    
    return (
      <View style={css.global.v_container}>
        <Text style={css.global.title}>{msg1}</Text>
        <Text style={css.global.body1}>{params.param1}</Text>
      </View>
    );
  }
  
}