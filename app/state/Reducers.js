// @flow

import type * as Types from './Types';
import * as actions from './Actions';

/**
 * main_reducer is responsible for processing state changes for all the action names that
 * start with "set".
 *
 * more info - https://goo.gl/JdPDWJ
 */
export const main_reducer = (state: Types.State, action: Types.Action): Types.State => {
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
function setWatchlist(state: Types.State, watchlist: LocationWatchList): Types.State {
  return state;
}

/**
 * todo generate a new state given the new reports
 */
function setWeatherData(state: Types.State, reports: WeatherReports) {
  return state;
}

/**
 * todo generate a new state given the new user
 */
function setUserObject(state: Types.State, user: User) {
  return state;
}