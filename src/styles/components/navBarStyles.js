import {StyleSheet} from 'react-native';

const navBarStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  gradientContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 25,
    width: '50%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  backButtonContainer: {
    position: 'absolute',
    left: '10%',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  circularButton: {
    backgroundColor: '#fff',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonStyle: {
    backgroundColor: 'transparent',
  },
});

export default navBarStyles;
