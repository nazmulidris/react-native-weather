// @flow

import React from "react";
import {StyleSheet} from "react-native";

export const colors = {
  "background_dark": '#455a64',
  "background_medium": '#b3c4cb',
  "background_light": '#d9e3f0',
  "button_bg": '#0693e3',
  "button_fg": '#d9e3f0',
  "text_light": '#d9d9d9',
  "text_medium": '#455a64',
  "text_dark": '#263238',
};

export const values = {
  "font_title": 'NotoSans-Bold',
  "font_body": 'NotoSans-Regular',
  "font_body_size": 14,
  "font_title_size": 20,
  'border_radius': 2,
};

export const global = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: colors.text_light,
    },
    title: {
      flex: -1, // shrink to min height & width if needed
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 4,
      fontSize: values.font_title_size,
      color: colors.text_dark,
      fontFamily: values.font_title, // more info https://goo.gl/7wYazn
    },
    body1: {
      flex: -1,
      marginTop: 4,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8,
      fontFamily: values.font_body, // more info https://goo.gl/7wYazn
      fontSize: values.font_body_size,
      color: colors.text_medium,
    },
    h_container: {
      flex: -1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch', // overrides container alignItems
      backgroundColor: colors.background_medium,
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

// more info https://goo.gl/dqw4jF
export const header = {
  // background
  headerStyle: {
    backgroundColor: colors.background_dark,
  },
  // arrows
  headerTintColor: colors.text_light,
  // my own styles for titleAndIcon
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 8,
  },
  // my own styles for titleAndIcon
  text: {
    paddingLeft: 8,
    color: colors.text_light,
    fontFamily: values.font_body,
    fontSize: values.font_title_size,
  }

};

// more info https://goo.gl/eawcVg
export const tabs = {
  // text
  labelStyle: {
    fontFamily: values.font_body,
    fontSize: values.font_body_size,
  },
  activeTintColor: colors.text_dark, // text color active tab
  inactiveTintColor: colors.text_medium, // text color inactive tab
  indicatorStyle: {backgroundColor: colors.button_bg}, // active tab highlight top
  style: {
    backgroundColor: colors.background_medium, // background color of tabs
    borderTopColor: colors.background_light // active tab highlight bottom
  }
};

// styling for for DrawerView.Items in contentOptions
// more info - https://goo.gl/d74VUZ
export const drawer = {
    activeBackgroundColor: colors.background_medium,
    inactiveBackgroundColor: colors.background_dark,
    inactiveTintColor: colors.text_light, // text color for inactive drawer items
    activeTintColor: colors.text_dark, // text color for active drawer items
    // style object for text style
    labelStyle: {
      fontFamily: values.font_title,
      fontSize: values.font_title_size,
    },
    // style object for the content section
    style: {
      backgroundColor: colors.background_dark,
    },
  }
;