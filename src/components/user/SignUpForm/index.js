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
    value: 'male'
  },
  {
    label: 'FEMALE',
    value: 'female'
  },
  {
    label: 'OTHER',
    value: 'other'
  }
];

const SignUpForm = ({ handleSubmit }) => (
  <View style={styles.signUp} onSubmit={handleSubmit}>
    <Field
      name="username"
      label="Name"
      component={Input}
    />
    <Field
      name="email"
      label="Email"
      component={Input}
      keyboardType="email-address"
    />
    <Field
      name="password"
      label="Password"
      component={Input}
      password
      placeholder="MIN. 8 CHARACTERS LONG"
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

const { func } = PropTypes;

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp, { fullMessages: false })
})(SignUpForm);
