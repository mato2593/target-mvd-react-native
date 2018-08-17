import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: undefined,
    width: undefined,
  },
  image: {
    position: 'absolute',
    top: -30,
    width: '100%',
  },
  title: {
    position: 'relative',
    top: 0,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 35,
    fontWeight: '800',
    letterSpacing: 5
  }
});

export default styles;
