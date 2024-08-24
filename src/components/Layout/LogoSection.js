import React from 'react';
import {View, Image} from 'react-native';
import logoSectionStyles from '../../styles/screens/Login/logoSectionStyles';

const LogoSection = () => {
  return (
    <View style={logoSectionStyles.logoContainer}>
      <Image
        source={require('../../assets/Logo.png')}
        style={logoSectionStyles.logo}
      />
    </View>
  );
};

export default LogoSection;
