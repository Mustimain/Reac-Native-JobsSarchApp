const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    borderColor: 'darkGray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  titleContainer: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  companyContainer: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  jobLevelContainer: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  jobLevelInnerContainer: {
    alignItems: 'flex-end',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  locationContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  locationInnerContainer: {
    backgroundColor: 'transparent',
    padding: 7,
    borderRadius: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  locationRadiusContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
