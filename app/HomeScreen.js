// @flow

import React, {Component} from "react";
import {FlatList, StatusBar, Text, TouchableHighlight, View} from "react-native";
import {Icon} from "react-native-elements";
import * as css from "./Styles";

export class HomeScreen extends Component {
  
  // reference to navigator
  _navigation;
  
  // dummy data to put in list view
  listData = [
    {
      key: '1',
      time: '7:04pm',
      place: 'Palo Alto',
      icon: 'ios-sunny-outline',
      iconColor: '#FFCF17',
      currentTemp: '62',
      description: 'Sunny',
    },
    {
      key: '2',
      time: '7:04pm',
      place: 'San Francisco',
      icon: 'ios-sunny-outline',
      iconColor: '#FFCF17',
      currentTemp: '60',
      description: 'Sunny',
    },
    {
      key: '3',
      time: '7:04pm',
      place: 'San Jose',
      icon: 'ios-sunny-outline',
      iconColor: '#FFCF17',
      currentTemp: '66',
      description: 'Sunny',
    },
    {
      key: '4',
      time: '7:04pm',
      place: 'Los Angeles',
      icon: 'ios-sunny-outline',
      iconColor: '#FFCF17',
      currentTemp: '66',
      description: 'sunny',
    },
    {
      key: '5',
      time: '3:04am',
      place: 'London',
      icon: 'ios-cloudy-night-outline',
      iconColor: '#464646',
      currentTemp: '50',
      description: 'Cloudy',
    },
  ];
  
  // only renders each list item
  renderRow({item}) {
    
    const time = `${item.time}`;
    const place = `${item.place}`;
    const temp = `${item.currentTemp}${String.fromCharCode(176)}`;
    const icon = `${item.icon}`;
    const iconColor = `${item.iconColor}`;
    
    return (
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={css.colors.transparent_white}
        onPress={
          () => {
            this._navigation.navigate("DetailsRoute", {...item});
          }
        }
      >
        <View style={css.list.row}>
          <View style={css.list.row_cell_timeplace}>
            <Text style={css.list.row_time}>{time}</Text>
            <Text style={css.list.row_place}>{place}</Text>
          </View>
          <Icon color={iconColor} size={css.values.small_icon_size} name={icon}
                type='ionicon'/>
          <Text style={css.list.row_cell_temp}>{temp}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  
  // sets up the entire screen
  render() {
    const msg1 = `Home`;
    const msg2 = `More coming soon!`;
  
    _navigation = this.props.navigation;
    
    return (
      <View style={css.global.v_container}>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.background_dark}
        />
  
        <FlatList
          style={css.list.container}
          data={this.listData}
          renderItem={this.renderRow}
        />
      
      </View>
    );
  }
  
}