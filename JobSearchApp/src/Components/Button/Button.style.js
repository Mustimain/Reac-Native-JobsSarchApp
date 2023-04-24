import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 50,
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('screen').width / 2.5 - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
