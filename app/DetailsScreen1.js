// @flow

import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

import * as css from './Styles';

export class DetailsScreen1 extends Component {
  
  static navigationOptions = {
    title: `TODAY`,
  };
  
  constructor(props) {
    super(props);
  }
  
  renderRow({item}) {
    
    let {key, time, icon, temp} = item;
    
    const {iconName, iconFont, iconColor} = icon;
  
    temp = css.addDegreesToEnd(temp);
    
    return (
      <View style={css.details_screen_1.list_row}>
        <Text style={css.details_screen_1.list_row_time}>{time}</Text>
        <Icon color={iconColor} size={css.values.tiny_icon_size} name={iconName}
              type={iconFont}/>
        <Text style={css.details_screen_1.list_row_temp}>{temp}</Text>
      </View>
    );
  }
  
  render() {
  
    const {description, currentTemp, icon, key, place, time, dailyForecast} =
            this.props.navigation.state.params;
    
    const {iconName, iconFont, iconColor} = icon;
  
    const temp = css.addDegreesToEnd(currentTemp);
    
    return (
      <View style={css.details_screen_1.v_container}>
        <Text style={css.details_screen_1.place}>{place}</Text>
        <Text style={css.details_screen_1.description}>{description}</Text>
        <Icon color={iconColor} size={css.values.large_icon_size} name={iconName}
              type={iconFont}/>
        <Text style={css.details_screen_1.current_temp}>{temp}</Text>
        <View style={css.details_screen_1.separator}/>
        <FlatList
          style={css.details_screen_1.list_container}
          data={dailyForecast}
          renderItem={this.renderRow}
        />
      </View>
    );
  
  }
  
}