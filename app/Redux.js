// @flow

import {createStore} from "redux";

const initState = null;

const reducer = (state = initState, action) => {
  return state;
};

export const store = createStore(reducer, {});