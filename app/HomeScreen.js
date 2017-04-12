// @flow

import React, {Component} from "react";
import {StatusBar, Text, ToastAndroid, View} from "react-native";
import {Button, Icon} from "react-native-elements";
import * as css from "./Styles";

export class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Weather App',
  };
  
  render() {
    const msg1 = `Home`;
    const msg2 = `More coming soon!`;
  
    const {navigate} = this.props.navigation;
    
    return (
      <View style={css.global.v_container}>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.statusbar_bg_color}
        />
  
        <Text style={css.global.title}>{msg1}</Text>
  
        <Text style={css.global.body1}>{msg2}</Text>
  
        <View style={css.global.h_container}>
          <Button
            onPress={() => navigate(`DetailsScreen`, {param1: msg2})}
            backgroundColor={css.colors.button_bg_color}
            color={css.colors.button_fg_color}
            title='Detail Screen'
            fontFamily={css.values.body_font}
            fontsize={css.values.body_font_size}
            icon={{
              name: 'android',
              color: css.colors.button_fg_color
            }}
            borderRadius={css.values.border_radius}
          />
          <Icon
            reverse
            name='heartbeat'
            type="font-awesome"
            color={css.colors.button_bg_color}
            onPress={() => ToastAndroid.show('Heart button pressed', 10000)}
          />
          <Button
            onPress={() => ToastAndroid.show('Info button pressed', 10000)}
            backgroundColor={css.colors.button_bg_color}
            color={css.colors.button_fg_color}
            title='Info'
            fontFamily={css.values.body_font}
            icon={{
              name: 'bug-report',
              color: css.colors.button_fg_color
            }}
            fontsize={css.values.body_font_size}
            borderRadius={css.values.border_radius}
          />
        </View>
      </View>
    );
  }
  
}