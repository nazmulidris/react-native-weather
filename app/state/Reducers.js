// @flow

import type * as Types from './Types';
import * as actions from './Actions';
import {ToastAndroid} from 'react-native';
import * as _ from 'lodash';

// todo define the empty startup state by creating a const for an empty user object
const EMPTY_USER: User     = {
  isAnon           : true,
  name             : 'anonymous',
  userid           : '123',
  profilePictureUrl: 'http://123.com/',
};
const INIT_STATE: AppState = {
  user     : EMPTY_USER,
  locations: [],
  reports  : [],
};

/**
 * main_reducer is responsible for processing state changes for all the action names that
 * start with "set".
 *
 * more info - https://goo.gl/JdPDWJ
 */
export const appReducer = (state: Types.AppState = INIT_STATE,
                           action: Types.Action,
): Types.AppState => {
  switch (action.type) {
    case actions.TYPES.set_watchlist: {
      return setWatchlist(state, action.payload);
    }
    case actions.TYPES.set_weather_data: {
      return setWeatherData(state, action.payload);
    }
    case actions.TYPES.set_user_object: {
      return setUserObject(state, action.payload);
    }
  }
  // in case nothing matched, just return the old state
  return state;
};

/**
 * generate a new state given the new watchlist
 */
function setWatchlist(state: Types.AppState,
                      locations: LocationWatchList,
): Types.AppState {
  ToastAndroid.show("REDUCER: SET WATCH LIST", ToastAndroid.SHORT);
  return {
    ...state,
    locations: _.cloneDeep(locations),
  };
}

/**
 * Generate a new state given the new reports.
 *
 * The weather data has to be deep cloned since FlatList is a PureComponent and only
 * does a shallow compare ... meaning that if a deep clone isn't done then it won't
 * register that the data has changed and the UI won't update!
 *
 * More info:
 * https://lodash.com/docs/4.17.4#cloneDeep
 * https://stackoverflow.com/questions/43397803/how-to-re-render-flatlist/43398395
 */
function setWeatherData(state: Types.AppState, reports: WeatherReports) {
  ToastAndroid.show("REDUCER: SET WEATHER DATA", ToastAndroid.SHORT);
  return {
    ...state,
    reports: _.cloneDeep(reports),
  };
}

/**
 * generate a new state given the new user
 */
function setUserObject(state: Types.AppState, user: User) {
  ToastAndroid.show("REDUCER: SET USER OBJECT", ToastAndroid.SHORT);
  return {
    ...state, // syntax : http://es6-features.org/#SpreadOperator
    user: _.cloneDeep(user), // syntax : http://es6-features.org/#PropertyShorthand
  };
}