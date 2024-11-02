import {StyleSheet} from 'react-native';

const logoSectionStyles = StyleSheet.create({
  logoContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#120b34',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default logoSectionStyles;
