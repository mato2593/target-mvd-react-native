import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    top: -30,
    width: '100%'
  },
  separator: {
    backgroundColor: 'black',
    height: 1,
    marginBottom: 10,
    marginTop: 20,
    width: '33%'
  },
  signInButton: {
    marginBottom: 35,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    position: 'relative',
    top: 0,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 35,
    fontWeight: 'bold',
    letterSpacing: 5
  }
});

export default styles;
