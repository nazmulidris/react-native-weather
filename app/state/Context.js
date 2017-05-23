// @flow

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer} from './Reducers';
import {mainMiddleware} from './Middlewares';

/**
 * This is where the redux store is created and connected to the initState, the reducer
 * and the middleware
 */

// export the create_store function (call this to create a new store)
export const store = createStore(
  combineReducers({
                    app: appReducer,
                  },
  ),
  applyMiddleware(mainMiddleware),
);