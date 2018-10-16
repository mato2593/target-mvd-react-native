import { StyleSheet } from 'react-native';
import * as colors from '../../../constants/colors';

const baseLabel = {
  height: 15,
  textAlign: 'center',
  fontWeight: 'bold'
};

const basePicker = {
  width: '67%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingVertical: 12,
  paddingHorizontal: 5,
  borderStyle: 'solid',
  borderWidth: 1,
  textAlign: 'center',
  fontWeight: 'bold'
};

const styles = StyleSheet.create({
  pickerContainer: {
    width: '100%'
  },
  label: {
    ...baseLabel,
    marginBottom: 3,
    letterSpacing: 2,
    fontSize: 12
  },
  picker: {
    ...basePicker
  },
  pickerError: {
    ...basePicker,
    borderColor: colors.tomatoe
  },
  pickerItem: {
    fontSize: 14
  },
  errorLabel: {
    ...baseLabel,
    color: colors.tomatoe,
    marginTop: 3,
    fontSize: 10
  }
});

export default styles;
