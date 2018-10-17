import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from '../api/userApi';
import * as types from './actionTypes';

export const signUpSuccess = () => ({
  type: types.SIGN_UP_SUCCESS
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const toggleLoading = () => ({
  type: types.TOGGLE_LOADING
});

export const signUp = user =>
  (dispatch) => {
    dispatch(toggleLoading());
    return userApi.signUp({ user }).then((response) => {
      sessionService.saveUser(response)
        .then(() => {
          dispatch(signUpSuccess());
        });
    }).catch((error) => {
      dispatch(toggleLoading());
      throw new SubmissionError({
        email: error.errors.email ? error.errors.fullMessages[0] : null
      });
    });
  };

export const login = user =>
  (dispatch) => {
    dispatch(toggleLoading());
    return userApi.login({ user }).then((response) => {
      sessionService.saveUser(response)
        .then(() => dispatch(loginSuccess()));
    }).catch((error) => {
      dispatch(toggleLoading());
      throw new SubmissionError({
        _error: error.errors[0],
      });
    });
  };

export const logout = () =>
  (dispatch) => {
    userApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(logoutSuccess());
    }).catch((err) => {
      throw (err);
    });
  };
