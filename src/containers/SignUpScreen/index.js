import React from 'react';
import { func, bool } from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SignUpForm from '../../components/user/SignUpForm';
import { signUp } from '../../actions/userActions';
import styles from './styles';
import backgroundImage from '../../assets/images/background.png';

const SignUpScreen = ({ signUp, loading = false }) => (
  <KeyboardAwareScrollView
    contentContainerStyle={styles.container}
    resetScrollToCoords={{ x: 0, y: 0 }}
  >
    <Spinner visible={loading} />
    <Image
      style={styles.image}
      source={backgroundImage}
      resizeMode="stretch"
    />
    <Text style={styles.title}>TARGET MVD</Text>
    <SignUpForm onSubmit={signUp} />
  </KeyboardAwareScrollView>
);

SignUpScreen.propTypes = {
  signUp: func.isRequired,
  loading: bool
};

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

SignUpScreen.navigatorStyle = {
  navBarHidden: true
};

const mapState = state => ({
  loading: state.getIn(['user', 'loading'])
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user.toJS()))
});

export default connect(mapState, mapDispatch)(SignUpScreen);
