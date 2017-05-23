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

//
// NOTE - if you don't use @connect ...
//
//   /*
//    * mapStateToProps & mapDispatchToProps more info:
//    * http://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
//    * https://goo.gl/VNQAOZ
//    */
//   const mapStateToProps = (state) => {
//     return {app: state.app};
//   };
//
//   const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
//   };
//
//   // exports HomeScreen as the connected component
//   // more info - http://redux.js.org/docs/basics/UsageWithReact.html
//   export const ConnectedHomeScreen =
//                  connect(mapStateToProps, mapDispatchToProps)
//                  (HomeScreen);
//

/**
 * This React component is bound to the Redux store. Redux Provider saves the redux store
 * in the Component.Context, which is then available to any React Component that is
 * wired up to Redux using @connect.
 */
@connect(
  (state) => {
    return {app: state.app};
  },
  (dispatch) => {
    return bindActionCreators(actions, dispatch);
  },
)
export class HomeScreen extends Component {
  
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
  
    let pressed = () => {
      // this._navigation.navigate("DetailsRoute", {...item});
      this._navigation.navigate('DetailsRoute', {...item});
    };
    
    let touchableWrapperIos =
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={css.colors.transparent_white}
            onPress={pressed}>
            {actualRowComponent}
          </TouchableHighlight>;
    
    let touchableWrapperAndroid =
          <TouchableNativeFeedback
            useForeground={true}
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            onPress={pressed}>
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
    
    _navigation = this.props.navigation;
    
    const uiTheme = {
      palette: {
        primaryColor: COLOR.green500,
      },
    };
  
    // debug
    let debugMsg;
    try {
      debugMsg = `User: ${JSON.stringify(app_state.user).substring(0, 30)}`;
      debugMsg += `..., Action: ${set_user_object_action.toString().substring(0, 10)}...`;
    }
    catch (e) {
      debugMsg = 'No user set in state';
    }
    console.log(":: HomeScreen.render ::");
    console.log(this.props);
    // debug
    
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
  
          <Text>{debugMsg}</Text>
          
          <FlatList
            style={css.home_screen_list.container}
            data={listData}
            renderItem={this.renderRow}
          />
  
          <ActionButton style={css.fab.stylesheet} icon={css.fab.icon}
                        onPress={this.actionButtonPressed(set_user_object_action)}/>
        
        </View>
      </ThemeProvider>
    );
    
  }// end render()
  
  actionButtonPressed(action) {
    return function (action) {
      console.log(':: action button pressed, firing redux action! ::');
      debugger;
      action();
    };
  }
  
}