import React from 'react';
import { func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableHighlight } from 'react-native';

import Input from '../../common/Input';
import * as constraints from '../../../utils/constraints';
import styles from './styles';

const LoginForm = ({ handleSubmit, error }) => (
  <View style={styles.login} onSubmit={handleSubmit}>
    <Field
      name="email"
      label="Email"
      component={Input}
    />
    <Field
      name="password"
      label="Password"
      component={Input}
      password
    />
    {error && <Text style={styles.error}>{error}</Text>}
    <TouchableHighlight onPress={handleSubmit} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </View>
    </TouchableHighlight>
  </View>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);
