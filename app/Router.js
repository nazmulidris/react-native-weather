// @flow

import React from "react";
import {AppRegistry} from "react-native";
import {StackNavigator, TabNavigator} from "react-navigation";
import {HomeScreen} from "./HomeScreen";
import {DetailsScreen1} from "./DetailsScreen1";
import {DetailsScreen2} from "./DetailsScreen2";
import * as css from "./Styles";

//
// tabs
//

// more info https://goo.gl/eawcVg
const nav_tab = TabNavigator(
  {
    DetailsScreen1: {screen: DetailsScreen1},
    DetailsScreen2: {screen: DetailsScreen2},
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: css.values.font_body,
        fontSize: css.values.font_body_size,
      },
      activeTintColor: css.colors.text_dark, // text color active tab
      inactiveTintColor: css.colors.text_medium, // text color inactive tab
      indicatorStyle: {backgroundColor: css.colors.button_bg}, // active tab highlight top
      style: {
        backgroundColor: css.colors.background_medium, // background color of tabs
        borderTopColor: css.colors.background_light // active tab highlight bottom
      }
    }
  },
);

// more info https://goo.gl/dqw4jF
nav_tab.navigationOptions = {
  title: 'Details',
  header: {
    // text
    titleStyle: css.global.nav_header_text_style,
    // background
    style: css.global.nav_header_bg_style,
    // arrows
    tintColor: css.colors.text_light,
  },
};

//
// stack
//

const nav_stack = StackNavigator(
  {
    HomeRoute: {screen: HomeScreen}, // this is displayed first
    DetailsRoute: {screen: nav_tab},
  });

AppRegistry.registerComponent('WeatherApp', () => nav_stack);