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
    borderColor: '#7958bc',
    borderRadius: 25,
    width: '50%',
    backgroundColor: '#120b34',
  },
});

export default navBarStyles;
