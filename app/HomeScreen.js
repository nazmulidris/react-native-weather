// @flow

import React, {Component} from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  ToastAndroid,
} from "react-native";
import {
  ActionButton,
  ThemeProvider,
  COLOR
} from 'react-native-material-ui';
import {Icon} from "react-native-elements";
import * as css from "./Styles";
import {listData} from "./Data";

export class HomeScreen extends Component {
  
  // reference to navigator
  _navigation;
  
  constructor(props) {
    super(props);
  }
  
  // only renders each list item
  renderRow({item}) {
    
    const time = `${item.time}`;
    const place = `${item.place}`;
    const temp = css.addDegreesToEnd(item.currentTemp);
    const {iconName, iconFont, iconColor} = item.icon;
    
    let actualRowComponent =
      <View style={css.home_screen_list.row}>
        <View style={css.home_screen_list.row_cell_timeplace}>
          <Text style={css.home_screen_list.row_time}>{time}</Text>
          <Text style={css.home_screen_list.row_place}>{place}</Text>
        </View>
        <Icon color={iconColor} size={css.values.small_icon_size} name={iconName}
              type={iconFont}/>
        <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text>
      </View>;
    
    let touchableWrapperIos =
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={css.colors.transparent_white}
        onPress={
          () => {
            this._navigation.navigate("DetailsRoute", {...item});
          }
        }
      >
        {actualRowComponent}
      </TouchableHighlight>;
    
    let touchableWrapperAndroid =
      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={
          () => {
            this._navigation.navigate("DetailsRoute", {...item});
          }
        }
      >
        {actualRowComponent}
      </TouchableNativeFeedback>;
    
    if (require('react-native').Platform.OS === 'ios') {
      return touchableWrapperIos;
    }
    else return touchableWrapperAndroid;
    
  };
  
  // placeholder for when FAB is pressed
  fabPressed = () => {
    ToastAndroid.show('FAB Pressed!', ToastAndroid.SHORT);
  };
  
  // sets up the entire screen
  render() {
    
    _navigation = this.props.navigation;
    
    const uiTheme = {
      palette: {
        primaryColor: COLOR.green500,
      },
    };
    
    return (
      <ThemeProvider uiTheme={uiTheme}>
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
          
          <ActionButton style={css.fab.stylesheet} icon={css.fab.icon} onPress={this.fabPressed}/>
        
        </View>
      </ThemeProvider>
    );
    
  }// end render()
  
}