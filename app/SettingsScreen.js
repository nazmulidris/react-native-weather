// @flow

import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';
import * as css from './Styles';

export class SettingsScreen extends Component {
  
  static navigationOptions = {
    title: `App Settings`,
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const msg1 = `Settings Screen`;
    
    return (
      <View style={css.settings_screen.v_container}>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.secondary}
        />
  
        <Text style={css.settings_screen.text}>{msg1}</Text>
      </View>
    );
  }
  
}