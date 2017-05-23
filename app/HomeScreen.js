// @flow

import React, {Component} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {ActionButton, COLOR, ThemeProvider} from 'react-native-material-ui';
import {Icon} from 'react-native-elements';
import * as css from './Styles';
import {listData} from './Data';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './state/Actions';
import {NavigationActions} from 'react-navigation';

class HomeScreen extends Component {
  
  // reference to navigator
  _navigation;
  
  // only renders each list item
  renderRow({item}) {
  
    const time                            = `${item.time}`;
    const place                           = `${item.place}`;
    const temp                            = css.addDegreesToEnd(item.currentTemp);
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
                //this._navigation.navigate("DetailsRoute", {...item});
                const action = NavigationActions.navigate({
                                                            routeName: 'DetailsRoute',
                                                            params   : {...item},
                                                          });
                this._navigation.dispatch(action);
              }
            }
          >
            {actualRowComponent}
          </TouchableNativeFeedback>;
  
    if (require('react-native').Platform.OS === 'ios') {
      return touchableWrapperIos;
    }
    else {
      return touchableWrapperAndroid;
    }
  
  };
  
  /**
   * Set up the landing screen of the app. This component uses
   * react-native-material-ui and it sets up a theme object for this library that is
   * passed at the root using a ThemeProvider.
   */
  render() {
  
    const {app: app_state, set_user_object_action} = this.props;
  
    let debug_user_msg;
    try {
      debug_user_msg = `User: ${JSON.stringify(app_state.user)}`;
    }
    catch (e) {
      debug_user_msg = 'No user set in state';
    }
    
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
  
          <Text>{debug_user_msg}</Text>
          
          <FlatList
            style={css.home_screen_list.container}
            data={listData}
            renderItem={this.renderRow}
          />
  
          <ActionButton style={css.fab.stylesheet} icon={css.fab.icon}
                        onPress={set_user_object_action}/>
        
        </View>
      </ThemeProvider>
    );
    
  }// end render()
  
}

/*
 * mapStateToProps & mapDispatchToProps more info:
 * http://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
 * http://stackoverflow.com/questions/32646920/whats-the-at-symbol-in-the-redux-connect-decorator
 */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

// exports HomeScreen as the connected component
// more info - http://redux.js.org/docs/basics/UsageWithReact.html
export const ConnectedHomeScreen =
               connect(mapStateToProps, mapDispatchToProps)
               (HomeScreen);
