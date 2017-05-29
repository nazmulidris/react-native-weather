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
import {connect} from 'react-redux';
import * as actions from './state/Actions';
import {store} from './state/Context';

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
)
export class HomeScreen extends Component {
  
  // reference to redux dispatch function
  _dispatchFunction;
  
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
  
    // fixed animation bug that didn't allow ripples to be drawn on UI component
    // https://johnresig.com/blog/how-javascript-timers-work/
    // https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers
    let pressed = () => {
      setTimeout(() => {
        this._navigation.navigate('DetailsRoute', {...item});
      }, 100);
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
  
    const {app} = this.props;
    
    _dispatchFunction = this.props.dispatch;
    _navigation       = this.props.navigation;
    
    const uiTheme = {
      palette: {
        primaryColor: COLOR.green500,
      },
    };
  
    // DEBUG-START
    // let debugMsg;
    // try {
    //   debugMsg = `#Reports ${app.reports.length}`;
    //   console.log(":: HomeScreen.render ::");
    //   // console.log(JSON.stringify(app.reports, null, '\t'));
    //   console.log(app);
    // }
    // catch (e) {
    //   debugMsg = 'No data set in state';
    // }
    // DEBUG-END
  
  
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
  
          {/*<Text>{debugMsg}</Text>*/}
          
          <FlatList
            style={css.home_screen_list.container}
            data={app.reports}
            renderItem={this.renderRow}
          />
  
          <ActionButton style={css.fab.stylesheet} icon={css.fab.icon}
                        onPress={this.actionButtonPressed}/>
        
        </View>
      </ThemeProvider>
    );
    
  }// end render()
  
  actionButtonPressed() {
  
    let path: number = 1;
  
    if (path === 0) {
    
      // This was just to test the set user object action
      this._dispatchFunction(actions.set_user_object_action(null));
    
    }
    else if (path === 1) {
    
      // This is just mocked up so that it feeds the mock data to the app one row at a
      // time
      try {
      
        let app                 = store.getState().app;
        let reports             = app.reports;
        let numOfCurrentReports = reports.length;
        if (numOfCurrentReports === listData.length) {
          // noop
        }
        else {
          // add another item to the stack
          let report = listData[numOfCurrentReports];
          reports.push(report);
          this._dispatchFunction(actions.set_weather_data_action(reports));
        }
      
      }
      catch (e) {
        console.log(e);
      }
    
    }
    else if (path === 2) {
    
      // Interact with the cloud to get fake weather data into the app ... instead of
      // directly setting weather data (as done above)
    
    }
    
  }
  
}// end class HomeScreen