import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  separator: {
    backgroundColor: 'black',
    height: 1,
    marginVertical: 10,
    width: '33%'
  },
  signUpButton: {
    marginBottom: 35,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginBottom: 70,
    marginTop: 75,
    position: 'relative',
    textAlign: 'center'
  },
  toSignUpContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default styles;
