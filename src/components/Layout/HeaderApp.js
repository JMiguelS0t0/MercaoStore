import React, {useContext, useCallback} from 'react';
import {View, Image, Pressable} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import headerStyle from '../../styles/components/headerStyle';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../../context/ProductContext';
import LinearGradient from 'react-native-linear-gradient';

const HeaderApp = () => {
  const navigation = useNavigation();
  const {cart} = useContext(ProductContext);

  const handleCartPress = useCallback(() => {
    navigation.navigate('Cart');
  }, [navigation]);

  const handleProfilePress = useCallback(() => {
    navigation.navigate('Account');
  }, [navigation]);

  const handleLogoPress = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const cartIconStyle =
    cart.length > 0 ? headerStyle.cartIconFilled : headerStyle.cartIcon;

  return (
    <LinearGradient
      colors={['transparent', '#eaeaea']}
      locations={[0, 1]}
      start={{x: 0.5, y: 1}}
      end={{x: 0.5, y: 0}}
      style={headerStyle.headerContainer}>
      <Pressable onPress={handleLogoPress}>
        <Image
          source={require('../../assets/Mercao.png')}
          style={globalStyles.smallLogo}
        />
      </Pressable>

      <View style={headerStyle.iconContainer}>
        <Pressable onPress={handleCartPress} style={cartIconStyle}>
          <Icon
            name="shopping-cart"
            type="font-awesome-5"
            color="#000"
            size={17}
          />
        </Pressable>

        <Pressable onPress={handleProfilePress} style={headerStyle.userIcon}>
          <Icon name="user" type="font-awesome-5" color="#000" size={17} />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default HeaderApp;
