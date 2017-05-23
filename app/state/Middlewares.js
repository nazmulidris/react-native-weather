// @flow

import * as actions from './Actions';
import type * as Types from './Types';

/**
 * main_middleware responds to all the action names that begin with "request".
 *
 * It writes to Firebase, and that triggers Firebase listeners to fire
 * actions that are processed by the main_reducer (in Reducers.js).
 *
 * more info (middleware)      - https://goo.gl/ZSeGji
 * more info (currying syntax) - https://goo.gl/Y2kEkq
 */
export const mainMiddleware = function (store) {
  return function (next) {
    return function (action: Types.Action) {
      if (action.type === actions.TYPES.request_refresh_weather_data) {
        requestRefreshWeatherData(action.payload);
      }
      else if (action.type === actions.TYPES.request_add_to_watchlist) {
        requestAddToWatchlist(action.payload);
      }
      else {
        return next(action); // must return this in order to invoke reducer functions
      }
      
    };
  };
};

/**
 * todo save the watchlist to firebase
 */
function requestAddToWatchlist(location: string): void {
}

/**
 * todo cause the weather to be refreshed server side
 */
function requestRefreshWeatherData(userid: string): void {
}