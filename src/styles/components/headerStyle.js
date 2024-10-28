import {StyleSheet} from 'react-native';

const headerStyle = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 0,
    marginBottom: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    marginRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIconFilled: {
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default headerStyle;
