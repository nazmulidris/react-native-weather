// @flow

import React from "react";
import {AppRegistry, ScrollView} from "react-native";
import {
  DrawerNavigator,
  DrawerView,
  StackNavigator,
  TabNavigator
} from "react-navigation";
import {HomeScreen} from "./HomeScreen";
import {DetailsScreen1} from "./DetailsScreen1";
import {DetailsScreen2} from "./DetailsScreen2";
import {SettingsScreen} from "./SettingsScreen";
import * as css from "./Styles";
import {Icon} from "react-native-elements";

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
    //headerMode: 'none', // this removes the navigation header
    navigationOptions: {
      header: {
        ...css.header,
        title: 'Weather App'
      },
    }
  }
);

//
// drawer ... more info https://goo.gl/2Dnmtl
//

const customComponent = (props) => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: 'lightblue',
    }}>
    <DrawerView.Items {...props} />
  </ScrollView>
);

const nav_drawer = DrawerNavigator(
  // route config
  {
    HomeRoute: {
      screen: nav_stack,
      navigationOptions: {
        drawer: {
          label: 'Main App',
          icon: ({tintColor}) => <Icon name="wb-sunny" color={tintColor}/>,
        },
      }
    },
    SettingsRoute: {
      screen: SettingsScreen,
      navigationOptions: {
        drawer: {
          label: 'Settings',
          icon: ({tintColor}) => <Icon name="settings" color={tintColor}/>,
        },
      }
    },
  },
  // navigator config
  {
    contentComponent: customComponent,
    drawerPosition: 'left',
    // styling for for DrawerView.Items in contentOptions
    contentOptions: {
      activeBackgroundColor: 'red',
      inactiveBackgroundColor: 'green',
      inactiveTintColor: 'lightblue', // text color for inactive drawer items
      activeTintColor: 'cyan', // text color for active drawer items
      // style object for text style
      labelStyle: {
        fontFamily: 'monospace',
        fontSize: 16,
      },
      // style object for the content section
      style: {
        backgroundColor: 'grey'
      },
    }
  }
);

AppRegistry.registerComponent('WeatherApp', () => nav_drawer);