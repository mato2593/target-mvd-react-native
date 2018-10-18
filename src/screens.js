import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';
import MainScreen from './containers/MainScreen';
import SignUpScreen from './containers/SignUpScreen';

export const LOGIN_SCREEN = 'targetMVD.LoginScreen';
export const MAIN_SCREEN = 'targetMVD.MainScreen';
export const SIGN_UP_SCREEN = 'targetMVD.SignUpScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(LOGIN_SCREEN, () => LoginScreen, store, Provider);
  Navigation.registerComponent(MAIN_SCREEN, () => MainScreen, store, Provider);
  Navigation.registerComponent(SIGN_UP_SCREEN, () => SignUpScreen, store, Provider);
};

export default registerScreens;
