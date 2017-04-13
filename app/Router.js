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

const nav_tab = TabNavigator(
  {
    DetailsScreen1: {screen: DetailsScreen1},
    DetailsScreen2: {screen: DetailsScreen2},
  },
  {
    tabBarOptions: css.tabbar
  },
);

nav_tab.navigationOptions = {
  title: 'Details',
  header: css.navbar,
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