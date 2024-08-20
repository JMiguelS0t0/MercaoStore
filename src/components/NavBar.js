import React from 'react';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
import navBarStyles from '../styles/components/navBarStyles';
import LinearGradient from 'react-native-linear-gradient';

const NavBar = () => {
  return (
    <View style={navBarStyles.container}>
      <LinearGradient
        colors={['transparent', 'rgba(115,83,182, 0.2)']}
        style={navBarStyles.gradientContainer}>
        <View style={navBarStyles.navBarContainer}>
          <Icon name="home" type="font-awesome" color="#beb5c5" size={20} />
          <Icon name="search" type="font-awesome" color="#beb5c5" size={20} />
          <Icon
            name="receipt"
            type="font-awesome-5"
            color="#beb5c5"
            size={20}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default NavBar;
