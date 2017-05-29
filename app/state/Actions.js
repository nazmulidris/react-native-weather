// @flow

import type * as Types from './Types';
import * as _ from 'lodash';

/**
 * All things related to the Actions are stored in this file.
 *
 * TYPES - this is an enumeration of all the different types of actions in the app
 * VERBS - this contains a set of actions that can be dispatched. Internally, each
 * verb has a function in this file which generates it's action object.
 */

//
// enumeration of all the kinds of action
//

export const TYPES = {
  request_refresh_weather_data: 0,
  request_add_to_watchlist    : 1,
  set_watchlist               : 2,
  set_weather_data            : 3,
  set_user_object             : 4,
};

//
// action function for each type of action
//

export function request_refresh_weather_data_action(userid: string): Types.Action {
  return {
    type   : TYPES.request_refresh_weather_data,
    payload: userid,
  };
}

export function request_add_to_watchlist_action(location: string): Types.Action {
  return {
    type   : TYPES.request_add_to_watchlist,
    payload: location,
  };
}

export function set_watch_action(locations: Array<string>): Types.Action {
  return {
    type   : TYPES.set_watchlist,
    payload: locations,
  };
}

export function set_weather_data_action(weatherreports: WeatherReports): Types.Action {
  return {
    type   : TYPES.set_weather_data,
    payload: weatherreports,
  };
}

export function set_user_object_action(user: User): Types.Action {
  let retval = {};
  if (_.isNil(user)) {
    // this is for debug purposes only!
    retval = {
      type   : TYPES.set_user_object,
      payload: {
        isAnon           : false,
        name             : Math.random().toString(36).substring(7),
        userid           : Math.random().toString(36).substring(7),
        profilePictureUrl: Math.random().toString(36).substring(7),
      },
    };
  }
  else {
    retval = {
      type   : TYPES.set_user_object,
      payload: user,
    };
  }
  return retval;
}