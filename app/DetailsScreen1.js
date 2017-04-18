// @flow

import React, {Component} from "react";
import {Text, View} from "react-native";
import {Icon} from "react-native-elements";

import * as css from "./Styles";

export class DetailsScreen1 extends Component {
  
  static navigationOptions = {
    title: `TODAY`,
  };
  
  render() {
  
    const {description, currentTemp, icon, key, place, time} =
      this.props.navigation.state.params;
  
    const {iconName, iconFont, iconColor} = icon;
  
    const temp = css.addDegreesAtEnd(currentTemp);
    
    return (
      <View style={[css.details_screen_1.v_container, css.global.backgroundOverride]}>
        <Text style={css.details_screen_1.place}>{place}</Text>
        <Text style={css.details_screen_1.description}>{description}</Text>
        <Icon color={iconColor} size={css.values.large_icon_size} name={iconName}
              type={iconFont}/>
        <Text style={css.details_screen_1.current_temp}>{temp}</Text>
        <View style={css.details_screen_1.separator}></View>

      </View>
    );
  
  }
  
}