import React from 'react';
import { string, object, bool } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({
  input: { onChange, ...restInput },
  placeholder = '',
  autoCapitalize = 'none',
  password = false,
  keyboardType = 'default',
  label, meta: { touched, error }
}) => (
  <View style={styles.inputContainer}>
    {label && <Text style={styles.label}>{label.toUpperCase()}</Text>}
    <View>
      <TextInput
        style={(touched && error) ? styles.inputError : styles.input}
        onChangeText={onChange}
        secureTextEntry={password}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        {...restInput}
      />
      <Text style={styles.errorLabel}>{(touched && error) ? error : ''}</Text>
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  placeholder: string,
  keyboardType: string,
  autoCapitalize: string
};

export default Input;
