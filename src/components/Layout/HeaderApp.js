import React from 'react';
import {View, Image, Text} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import headerStyle from '../../styles/components/headerStyle';
import {Icon} from '@rneui/themed';

const HeaderApp = () => {
  return (
    <View style={headerStyle.headerContainer}>
      <Image
        source={require('../../assets/Mercao.png')}
        style={globalStyles.smallLogo}
      />
      <View style={headerStyle.iconContainer}>
        <Icon
          name="shopping-cart"
          type="font-awesome-5"
          color="#fff"
          size={17}
          style={headerStyle.cartIcon}
        />
        <Image
          source={require('../../assets/IconPerson.jpg')}
          style={globalStyles.profileImage}
        />
      </View>
    </View>
  );
};
export default HeaderApp;
