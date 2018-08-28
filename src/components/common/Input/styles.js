import { StyleSheet } from 'react-native';
import * as colors from '../../../constants/colors';

const baseLabel = {
  height: 15,
  textAlign: 'center',
  fontWeight: 'bold'
};

const baseInput = {
  width: '67%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingVertical: 12,
  paddingHorizontal: 5,
  borderStyle: 'solid',
  borderWidth: 1,
  fontWeight: 'bold'
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%'
  },
  label: {
    ...baseLabel,
    marginBottom: 3,
    letterSpacing: 2,
    fontSize: 12
  },
  input: {
    ...baseInput
  },
  inputError: {
    ...baseInput,
    borderColor: colors.tomatoe
  },
  errorLabel: {
    ...baseLabel,
    color: colors.tomatoe,
    fontSize: 10,
    marginTop: 3
  }
});

export default styles;
