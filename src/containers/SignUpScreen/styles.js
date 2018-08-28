import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    top: -30,
    width: '100%'
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
