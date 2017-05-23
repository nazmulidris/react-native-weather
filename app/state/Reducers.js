// @flow

import type * as Types from './Types';
import * as actions from './Actions';

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
 * todo generate a new state given the new watchlist
 */
function setWatchlist(state: Types.AppState,
                      watchlist: LocationWatchList,
): Types.AppState {
  return state;
}

/**
 * todo generate a new state given the new reports
 */
function setWeatherData(state: Types.AppState, reports: WeatherReports) {
  return state;
}

/**
 * todo generate a new state given the new user
 */
function setUserObject(state: Types.AppState, user: User) {
  return {
    ...state, // syntax : http://es6-features.org/#SpreadOperator
    user, // syntax : http://es6-features.org/#PropertyShorthand
  };
}