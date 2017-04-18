// @flow

import React, {Component} from "react";
import {FlatList, StatusBar, Text, TouchableHighlight, View} from "react-native";
import {Icon} from "react-native-elements";
import * as css from "./Styles";
import {listData} from "./Data";

export class HomeScreen extends Component {
  
  // reference to navigator
  _navigation;
  
  // only renders each list item
  renderRow({item}) {
    
    const time = `${item.time}`;
    const place = `${item.place}`;
    const temp = css.addDegreesToEnd(item.currentTemp);
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
        <View style={css.home_screen_list.row}>
          <View style={css.home_screen_list.row_cell_timeplace}>
            <Text style={css.home_screen_list.row_time}>{time}</Text>
            <Text style={css.home_screen_list.row_place}>{place}</Text>
          </View>
          <Icon color={iconColor} size={css.values.small_icon_size} name={iconName}
                type={iconFont}/>
          <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  
  // sets up the entire screen
  render() {
  
    _navigation = this.props.navigation;
    
    return (
      <View style={css.home_screen.v_container}>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.secondary}
        />
  
        <FlatList
          style={css.home_screen_list.container}
          data={listData}
          renderItem={this.renderRow}
        />
      
      </View>
    );
  
  }// end render()
  
}