import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  loading: false
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING:
      return state.set('loading', !state.get('loading'));
    case types.SIGN_UP_SUCCESS:
      return state.get('loading', !state.get('loading', false));
    default:
      return state;
  }
};
