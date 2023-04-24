import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  htmlViewerContainer: {
    margin: 10,
  },
  buttonContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  jobnameContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  jobLocationContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 5,
  },
  jobLocationInnerContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  jobLevelContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 5,
  },
  jobLevelInnerContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  jobDetailContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },
});
