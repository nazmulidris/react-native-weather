// @flow

import type * as Types from "./Types";

// enumeration of all the kinds of actions
export const TYPES = {
  request_refresh_weather_data: 0,
  request_add_to_watchlist: 1,
  set_watchlist: 2,
  set_weather_data: 3,
  set_user_object: 4,
};

// action function for each type of action
function request_refresh_weather_data_action(userid: string): Types.Action {
  return {
    type: TYPES.request_refresh_weather_data,
    payload: userid,
  }
}

function request_add_to_watchlist_action(location: string): Types.Action {
  return {
    type: TYPES.request_add_to_watchlist,
    payload: location,
  }
}

function set_watch_action(locations: Array<string>): Types.Action {
  return {
    type: TYPES.set_watchlist,
    payload: locations,
  }
}

function set_weather_data_action(weatherreports: WeatherReports): Types.Action {
  return {
    type: TYPES.set_weather_data,
    payload: weatherreports,
  }
}

function set_user_object_action(user: User): Types.Action {
  return {
    type: TYPES.set_user_object,
    payload: user,
  }
}

export const VERBS = {
  request_refresh_weather_data_action,
  request_add_to_watchlist_action,
  set_watch_action,
  set_weather_data_action,
  set_user_object_action,
};