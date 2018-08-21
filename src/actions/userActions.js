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

export const signUp = user =>
  dispatch =>
    userApi.signUp({ user }).then((response) => {
      sessionService.saveUser(response)
        .then(() => dispatch(signUpSuccess()));
    }).catch((error) => {
      throw new SubmissionError({
        _error: error.error
      });
    });

export const login = user =>
  dispatch =>
    userApi.login({ user }).then((response) => {
      sessionService.saveUser(response.user)
        .then(() => dispatch(loginSuccess()));
    }).catch((err) => {
      throw new SubmissionError({
        _error: err.error,
      });
    });

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
