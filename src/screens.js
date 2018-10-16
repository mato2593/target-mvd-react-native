import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';
import MainScreen from './containers/MainScreen';
import SignUpScreen from './containers/SignUpScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('reactnativebase.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('reactnativebase.MainScreen', () => MainScreen, store, Provider);
  Navigation.registerComponent('reactnativebase.SignUpScreen', () => SignUpScreen, store, Provider);
};

export default registerScreens;
