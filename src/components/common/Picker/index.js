import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

const CustomPicker = ({ input: { onChange, ...restInput }, label, options, meta: { touched, error } }) => (
  <View>
    {label && <Text style={styles.label}>{label.toUpperCase()}</Text>}
    <View>
      <RNPickerSelect
        items={options}
        placeholder={{
          label: 'SELECT YOUR GENDER',
          value: null
        }}
        onValueChange={onChange}
        {...restInput}
      >
        <TextInput
          style={(touched && error) ? styles.pickerError : styles.picker}
          placeholder={'SELECT YOUR GENDER'}
          {...restInput}
        />
      </RNPickerSelect>
      <Text style={styles.errorLabel}>{(touched && error) ? error : ''}</Text>
    </View>
  </View>
);

const { string, object, array } = PropTypes;

CustomPicker.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  options: array.isRequired,
};

export default CustomPicker;
