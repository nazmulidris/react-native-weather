// @flow

import React from "react";
import {StyleSheet} from "react-native";

export const global = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: '#d9d9d9',
    },
    heading: {
      flex: -1, // shrink to min height & width if needed
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 4,
      fontSize: 20,
      color: '#263238',
      fontFamily: 'NotoSans-Bold', // more info https://goo.gl/7wYazn
    },
    body: {
      flex: -1,
      marginTop: 4,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8,
      fontFamily: 'NotoSans-Regular', // more info https://goo.gl/7wYazn
      fontSize: 14,
      color: '#455a64',
    },
    h_container: {
      flex: -1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch', // overrides container alignItems
      backgroundColor: '#b3c4cb',
      padding: 16,
    },
    icon: {
      flex: -1,
      margin: 8,
      height: 100,
      width: 75,
      resizeMode: 'contain', //'cover' | 'contain'
    },
  });

export const colors = {
  "statusbar_bg_color": "#455a64",
  "button_bg_color": "#607d8b"
};
