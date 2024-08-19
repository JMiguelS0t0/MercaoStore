import {StyleSheet} from 'react-native';

const NavBarStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
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

export default NavBarStyles;
