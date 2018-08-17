import { StyleSheet } from 'react-native';

const baseLabel = {
  height: 15,
  textAlign: 'center',
  fontWeight: 'bold'
};

const basePicker = {
  width: 230,
  height: 40,
  borderStyle: 'solid',
  borderWidth: 1,
  padding: 5,
  textAlign: 'center',
  fontWeight: 'bold'
};

const tomatoe = 'rgb(233, 40, 40)';

const styles = StyleSheet.create({
  label: {
    ...baseLabel,
    marginBottom: 3,
    letterSpacing: 2,
    fontSize: 12,
  },
  picker: {
    ...basePicker,
  },
  pickerError: {
    ...basePicker,
    borderColor: tomatoe,
  },
  pickerItem: {
    fontSize: 14
  },
  errorLabel: {
    ...baseLabel,
    color: tomatoe,
    marginTop: 3,
    fontSize: 10,
  }
});

export default styles;
