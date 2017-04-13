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
  // route config
  {
    DetailsScreen1: {screen: DetailsScreen1},
    DetailsScreen2: {screen: DetailsScreen2},
  },
  // navigator config
  {
    lazyLoad: true, // render the tabs lazily
    tabBarPosition: 'bottom', // where are the tabs shown
    backBehavior: 'none', // back button doesn't take you to the initial tab
    tabBarOptions: css.tabs
  },
);

//
// stack
//

const nav_stack = StackNavigator(
  // route config
  {
    HomeRoute: {screen: HomeScreen}, // this is displayed first
    DetailsRoute: {screen: nav_tab},
  },
  // navigator config
  {
    navigationOptions: {
      header: {
        ...css.header,
        title: 'Weather App'
      },
    }
  }
);

AppRegistry.registerComponent('WeatherApp', () => nav_stack);