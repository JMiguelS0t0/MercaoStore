import React, {useContext} from 'react';
import {View, Image, Pressable} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import headerStyle from '../../styles/components/headerStyle';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../../context/ProductContext';

const HeaderApp = () => {
  const navigation = useNavigation();
  const {cart} = useContext(ProductContext);

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleProfilePress = () => {
    navigation.navigate('Account');
  };

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  const cartIconStyle =
    cart.length > 0 ? headerStyle.cartIconFilled : headerStyle.cartIcon;

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
          containerStyle={cartIconStyle}
          onPress={handleCartPress}
        />
        <Icon
          name="user"
          type="font-awesome-5"
          color="#fff"
          size={17}
          style={headerStyle.userIcon}
          onPress={handleProfilePress}
        />
      </View>
    </View>
  );
};

export default HeaderApp;
