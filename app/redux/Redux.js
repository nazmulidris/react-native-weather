// @flow

import {createStore} from "redux";
import type * as Types from "./Types";
import * as actions from "./Actions";

// todo define the empty startup state
const initState = null;

// main reducer
const reducer = (state: Types.State = initState, action: Types.Action): Types.State => {
  // todo create actual reducer functions
  switch (action.type) {
    // todo move this to middleware
    // case actions.TYPES.request_refresh_weather_data: {
    //   return state;
    // }
    // case actions.TYPES.request_add_to_watchlist: {
    //   return state;
    // }
    case actions.TYPES.set_watchlist: {
      return state;
    }
    case actions.TYPES.set_weather_data: {
      return state;
    }
    case actions.TYPES.set_user_object: {
      return state;
    }
  }
  // in case nothing matched, just return the old state
  return state;
};

// todo create the middleware

// finally, create the store and expose it
export const app_store = createStore(reducer, {});