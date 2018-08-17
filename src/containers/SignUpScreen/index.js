import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import SignUpForm from '../../components/user/SignUpForm';
import styles from './styles';

const SignUpScreen = ({ signUp }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('../../assets/images/background.png')}
      resizeMode={'stretch'}
    />
    <Text style={styles.title}>TARGET MVD</Text>
    <SignUpForm onSubmit={user => signUp(user.toJS())} />
  </View>
);

const { func } = PropTypes;

SignUpScreen.propTypes = {
  signUp: func
};

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

SignUpScreen.navigatorStyle = {
  navBarHidden: true
};

export default connect(null, null)(SignUpScreen);
