const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textContainer: {
    paddingBottom: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
});
