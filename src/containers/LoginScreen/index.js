import React from 'react';
import { bool, func } from 'prop-types';
import { Text, Image, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';

import LoginForm from '../../components/user/LoginForm';
import { login } from '../../actions/userActions';
import styles from './styles';
import backgroundImage from '../../assets/images/background.png';

const LoginScreen = ({ login, loading = false }) => (
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
    <LoginForm onSubmit={user => login(user.toJS())} />
    <View style={styles.toSignUpContainer}>
      <View style={styles.separator} />
      <TouchableHighlight style={styles.signUpButton} onPress={() => console.log('to sign up')} underlayColor="white">
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableHighlight>
    </View>
  </KeyboardAwareScrollView>
);

LoginScreen.propTypes = {
  login: func.isRequired,
  loading: bool
};

LoginScreen.navigationOptions = {
  title: 'Log In'
};

LoginScreen.navigatorStyle = {
  navBarHidden: true
};

const mapState = state => ({
  loading: state.getIn(['user', 'loading'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapState, mapDispatch)(LoginScreen);
