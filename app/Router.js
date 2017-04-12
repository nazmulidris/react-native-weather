// @flow

import React from "react";
import {AppRegistry} from "react-native";
import {StackNavigator} from "react-navigation";
import {HomeScreen} from "./HomeScreen";
import {DetailsScreen} from "./DetailsScreen";

const navigator = StackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    DetailsScreen: {screen: DetailsScreen},
  });

AppRegistry.registerComponent('WeatherApp', () => navigator);