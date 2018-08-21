import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SignUpForm from '../../components/user/SignUpForm';
import { signUp } from '../../actions/userActions';
import styles from './styles';

const SignUpScreen = ({ signUp }) => (
  <KeyboardAwareScrollView
    contentContainerStyle={styles.container}
    resetScrollToCoords={{ x: 0, y: 0 }}
  >
    <Image
      style={styles.image}
      source={require('../../assets/images/background.png')}
      resizeMode={'stretch'}
    />
    <Text style={styles.title}>TARGET MVD</Text>
    <SignUpForm onSubmit={user => signUp(user.toJS())} />
  </KeyboardAwareScrollView>
);

const { func } = PropTypes;

SignUpScreen.propTypes = {
  signUp: func.isRequired
};

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

SignUpScreen.navigatorStyle = {
  navBarHidden: true
};

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(null, mapDispatch)(SignUpScreen);
