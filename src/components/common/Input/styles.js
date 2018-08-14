import { StyleSheet } from 'react-native';

const baseLabel = {
  height: 20,
  textAlign: 'center',
  fontWeight: 'bold',
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
    marginTop: 5,
    marginBottom: 5,
    letterSpacing: 2,
    fontSize: 16,
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
    marginTop: 5,
    fontSize: 10,
  }
});

export default styles;
