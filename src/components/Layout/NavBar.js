import React, {useCallback} from 'react';
import {View} from 'react-native';
import navBarStyles from '../../styles/components/navBarStyles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconButton from '../../reusable/IconButton';

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isMainScreen = route.name === 'Home';

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNavigateHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleNavigateSearch = useCallback(() => {
    navigation.navigate('SearchScreen');
  }, [navigation]);

  const handleNavigatePurchases = useCallback(() => {
    navigation.navigate('Purchases');
  }, [navigation]);

  return (
    <View style={navBarStyles.container}>
      <LinearGradient
        colors={['transparent', 'rgba(234, 234, 234, 0.2)']}
        style={navBarStyles.gradientContainer}>
        {!isMainScreen && (
          <View style={navBarStyles.backButtonContainer}>
            <IconButton
              iconName="arrow-left"
              type="font-awesome"
              onPress={handleGoBack}
              containerStyle={navBarStyles.circularButton}
            />
          </View>
        )}
        <View style={navBarStyles.navBarContainer}>
          <IconButton
            iconName="home"
            type="font-awesome"
            onPress={handleNavigateHome}
          />
          <IconButton
            iconName="search"
            type="font-awesome"
            onPress={handleNavigateSearch}
          />
          <IconButton
            iconName="receipt"
            type="font-awesome-5"
            onPress={handleNavigatePurchases}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default NavBar;
