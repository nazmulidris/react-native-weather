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
      icon: {
        iconName: 'ios-sunny-outline',
        iconFont: 'ionicon',
        iconColor: '#FFCF17'
      },
      currentTemp: '62',
      description: 'Sunny',
      dailyForecast: [
        {
          key: '1',
          time: '8 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '59'
        },
        {
          key: '2',
          time: '9 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '57'
        },
        {
          key: '3',
          time: '10 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '57'
        },
        {
          key: '4',
          time: '11 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '57'
        },
        {
          key: '5',
          time: '12 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '57'
        },
        {
          key: '6',
          time: '1 AM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '56'
        },
        {
          key: '7',
          time: '2 AM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#464646'
          },
          temp: '55'
        },
      ],
    },
    {
      key: '2',
      time: '7:04pm',
      place: 'San Francisco',
      icon: {
        iconName: 'ios-sunny-outline',
        iconFont: 'ionicon',
        iconColor: '#FFCF17'
      },
      currentTemp: '60',
      description: 'Sunny',
      dailyForecast: [
        {
          key: '1',
          time: '8 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '59'
        },
        {
          key: '2',
          time: '9 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '57'
        },
        {
          key: '3',
          time: '10 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '60'
        },
      ],
    },
    {
      key: '3',
      time: '7:04pm',
      place: 'San Jose',
      icon: {
        iconName: 'ios-sunny-outline',
        iconFont: 'ionicon',
        iconColor: '#FFCF17'
      },
      currentTemp: '66',
      description: 'Sunny',
      dailyForecast: [
        {
          key: '1',
          time: '8 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '59'
        },
        {
          key: '2',
          time: '9 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '57'
        },
        {
          key: '3',
          time: '10 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '60'
        },
      ],
    },
    {
      key: '4',
      time: '7:04pm',
      place: 'Los Angeles',
      icon: {
        iconName: 'ios-sunny-outline',
        iconFont: 'ionicon',
        iconColor: '#FFCF17'
      },
      currentTemp: '66',
      description: 'sunny',
      dailyForecast: [
        {
          key: '1',
          time: '8 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '59'
        },
        {
          key: '2',
          time: '9 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '57'
        },
        {
          key: '3',
          time: '10 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '60'
        },
      ],
    },
    {
      key: '5',
      time: '3:04am',
      place: 'London',
      icon: {
        iconName: 'ios-cloudy-night-outline',
        iconFont: 'ionicon',
        iconColor: '#464646'
      },
      currentTemp: '50',
      description: 'Cloudy',
      dailyForecast: [
        {
          key: '1',
          time: '8 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '59'
        },
        {
          key: '2',
          time: '9 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '57'
        },
        {
          key: '3',
          time: '10 PM',
          icon: {
            iconName: 'ios-moon-outline',
            iconFont: 'ionicon',
            iconColor: '#FFCF17'
          },
          temp: '60'
        },
      ],
    },
  ];
  
  // only renders each list item
  renderRow({item}) {
    
    const time = `${item.time}`;
    const place = `${item.place}`;
    const temp = css.addDegreesAtEnd(item.currentTemp);
    const {iconName, iconFont, iconColor} = item.icon;
    
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
          <Icon color={iconColor} size={css.values.small_icon_size} name={iconName}
                type={iconFont}/>
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
          hidden={true}
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