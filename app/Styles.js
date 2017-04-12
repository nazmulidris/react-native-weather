// @flow

import React from "react";
import {StyleSheet} from "react-native";

export const homescreen = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: '#d9d9d9',
    },
    heading: {
      flex: -1, // shrink to min height & width if needed
      fontSize: 20,
      color: '#263238',
      fontFamily: 'NotoSans-Bold', // more info https://goo.gl/7wYazn
      margin: 8,
    },
    body: {
      flex: -1,
      margin: 8,
      fontFamily: 'NotoSans-Regular', // more info https://goo.gl/7wYazn
      fontSize: 12,
      color: '#455a64',
    },
    h_container: {
      flex: -1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch', // overrides container alignItems
      backgroundColor: '#607d8b',
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
