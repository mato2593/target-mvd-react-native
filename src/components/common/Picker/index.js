import React from 'react';
import { string, object, array } from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

const CustomPicker = ({
  input: { onChange, value, ...restInput },
  label,
  options,
  meta: { touched, error }
}) => (
  <View style={styles.pickerContainer}>
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
          value={value.toUpperCase()}
          {...restInput}
        />
      </RNPickerSelect>
      <Text style={styles.errorLabel}>{(touched && error) ? error : ''}</Text>
    </View>
  </View>
);

CustomPicker.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  options: array.isRequired,
};

export default CustomPicker;
