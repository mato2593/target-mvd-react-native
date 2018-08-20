import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableHighlight } from 'react-native';

import Input from '../../common/Input';
import * as constraints from '../../../utils/constraints';
import styles from './styles';
import CustomPicker from '../../common/Picker';

const genderOptions = [
  {
    label: 'MALE',
    value: 'MALE'
  },
  {
    label: 'FEMALE',
    value: 'FEMALE'
  },
  {
    label: 'OTHER',
    value: 'OTHER'
  }
];

const SignUpForm = ({ handleSubmit, error }) => (
  <View style={styles.signUp} onSubmit={handleSubmit}>
    {error && <Text>{error}</Text>}
    <Field
      name="name"
      label="Name"
      component={Input}
    />
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
      placeholder="MIN. 6 CHARACTERS LONG"
    />
    <Field
      name="passwordConfirmation"
      label="Confirm password"
      component={Input}
      password
    />
    <Field
      name="gender"
      label="Gender"
      component={CustomPicker}
      options={genderOptions}
    />
    <TouchableHighlight onPress={handleSubmit} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const { func, string } = PropTypes;

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp, { fullMessages: false })
})(SignUpForm);
