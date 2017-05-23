// @flow

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer} from './Reducers';
import {mainMiddleware} from './Middlewares';

/**
 * This is where the redux store is created and connected to the initState, the reducer
 * and the middleware
 */

// export the create_store function (call this to create a new store)
export function create_store(NavDrawer, NavStack, NavTab) {
  
  const navDrawerReducer = (state, action) => {
    const newState = NavDrawer.router.getStateForAction(action, state);
    return newState || state;
  };
  
  let navStackReducer = (state, action) => {
    const newState = NavStack.router.getStateForAction(action, state);
    return newState || state;
  };
  
  let navTabReducer = (state, action) => {
    const newState = NavTab.router.getStateForAction(action, state);
    return newState || state;
  };
  
  return createStore(
    combineReducers({
                      nav_drawer: navDrawerReducer,
                      nav_stack : navStackReducer,
                      nav_tab   : navTabReducer,
                      app       : appReducer,
                    },
    ),
    applyMiddleware(mainMiddleware),
  );
  
}