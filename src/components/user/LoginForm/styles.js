import { StyleSheet } from 'react-native';
import { tomatoe } from '../../../constants/colors';

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    height: 'auto',
    width: '100%'
  },
  button: {
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
    width: 120
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  error: {
    color: tomatoe,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center'
  }
});

export default styles;
