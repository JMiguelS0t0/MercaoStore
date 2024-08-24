import React from 'react';
import {View, Image, Pressable} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import headerStyle from '../../styles/components/headerStyle';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const HeaderApp = () => {
  const navigation = useNavigation();

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleProfilePress = () => {
    navigation.navigate('Account');
  };

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={headerStyle.headerContainer}>
      <Pressable onPress={handleLogoPress}>
        <Image
          source={require('../../assets/Mercao.png')}
          style={globalStyles.smallLogo}
        />
      </Pressable>
      <View style={headerStyle.iconContainer}>
        <Icon
          name="shopping-cart"
          type="font-awesome-5"
          color="#fff"
          size={17}
          style={headerStyle.cartIcon}
          onPress={handleCartPress}
        />
        <Icon
          name="user"
          type="font-awesome-5"
          color="#fff"
          size={17}
          style={headerStyle.cartIcon}
          onPress={handleProfilePress}
        />
      </View>
    </View>
  );
};

export default HeaderApp;
