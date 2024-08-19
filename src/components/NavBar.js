import React from 'react';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
import navBarStyles from '../styles/components/navBarStyles';

const NavBar = () => {
  return (
    <View style={navBarStyles.container}>
      <View style={navBarStyles.navBarContainer}>
        <Icon name="home" type="font-awesome" color="#beb5c5" size={20} />
        <Icon name="search" type="font-awesome" color="#beb5c5" size={20} />
        <Icon name="receipt" type="font-awesome-5" color="#beb5c5" size={20} />
      </View>
    </View>
  );
};

export default NavBar;
