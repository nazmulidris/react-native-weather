// @flow

import {applyMiddleware, createStore} from 'redux';
import {main_reducer} from './Reducers';
import {main_middleware} from './Middlewares';

/**
 * This is where the redux store is created and connected to the initState, the reducer
 * and the middleware
 */

// todo define the empty startup state
const initState = null;

// create the store and expose it
export const app_store = createStore(main_reducer,
                                     initState,
                                     applyMiddleware(main_middleware),
);