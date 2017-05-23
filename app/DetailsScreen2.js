// @flow

import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import * as css from './Styles';
import {Icon} from 'react-native-elements';

export class DetailsScreen2 extends Component {
  
  static navigationOptions = {
    title: `WEEKLY`,
  };
  
  constructor(props) {
    super(props);
  }
  
  renderRow({item}) {
  
    let {day, icon, key, temp}            = item;
    const {iconName, iconFont, iconColor} = icon;
    temp                                  = css.addDegreesToEnd(temp);
    
    return (
      <View style={css.details_screen_2.row}>
        <Text style={css.details_screen_2.day}>{day}</Text>
        <Icon color={iconColor} size={css.values.small_icon_size} name={iconName}
              type={iconFont}/>
        <Text style={css.details_screen_2.temp}>{temp}</Text>
      </View>
    );
    
  }
  
  render() {
    
    const {currentTemp, icon, key, place, time, weeklyForecast} =
            this.props.navigation.state.params;
    
    const {iconName, iconFont, iconColor} = icon;
  
    return (
      <View style={css.details_screen_2.v_container}>
        <Text style={[css.details_screen_1.place]}>{place}</Text>
        <FlatList
          style={css.details_screen_2.list}
          horizontal={true}
          data={weeklyForecast}
          renderItem={this.renderRow}
        />
      </View>
    );
  
  }
  
}