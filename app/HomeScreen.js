// @flow

import React, {Component} from "react";
import {StatusBar, Text, ToastAndroid, View} from "react-native";
import {Button, Icon} from "react-native-elements";
import * as css from "./Styles";

export class HomeScreen extends Component {
  
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
          backgroundColor={css.colors.background_dark}
        />
  
        <Text style={css.global.title}>{msg1}</Text>
  
        <Text style={css.global.body1}>{msg2}</Text>
  
        <View style={css.global.h_container}>
          <Button
            onPress={() => navigate('DetailsRoute', {param1: msg2})}
            backgroundColor={css.colors.button_bg}
            color={css.colors.button_fg}
            title='Detail Screen'
            fontFamily={css.values.font_body}
            fontsize={css.values.font_body_size}
            icon={{
              name: 'android',
              color: css.colors.button_fg
            }}
            borderRadius={css.values.border_radius}
          />
          <Icon
            onPress={() => ToastAndroid.show('Heart button pressed', 10000)}
            reverse
            name='heartbeat'
            type="font-awesome"
            color={css.colors.button_bg}
          />
          <Button
            onPress={() => ToastAndroid.show('Info button pressed', 10000)}
            backgroundColor={css.colors.button_bg}
            color={css.colors.button_fg}
            title='Info'
            fontFamily={css.values.font_body}
            icon={{
              name: 'bug-report',
              color: css.colors.button_fg
            }}
            fontsize={css.values.font_body_size}
            borderRadius={css.values.border_radius}
          />
        </View>
      </View>
    );
  }
  
}