import { StyleSheet } from 'react-native';

const baseLabel = {
  height: 15,
  textAlign: 'center',
  fontWeight: 'bold'
};

const baseInput = {
  width: 230,
  height: 40,
  borderStyle: 'solid',
  borderWidth: 1,
  padding: 5,
  fontWeight: 'bold',
};

const tomatoe = 'rgb(233, 40, 40)';

const styles = StyleSheet.create({
  label: {
    ...baseLabel,
    marginBottom: 3,
    letterSpacing: 2,
    fontSize: 12,
  },
  input: {
    ...baseInput,
  },
  inputError: {
    ...baseInput,
    borderColor: tomatoe,
  },
  errorLabel: {
    ...baseLabel,
    color: tomatoe,
    fontSize: 10,
    marginTop: 3
  }
});

export default styles;
