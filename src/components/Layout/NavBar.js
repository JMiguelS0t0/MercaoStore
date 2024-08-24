import React from 'react';
import {View} from 'react-native';
import navBarStyles from '../../styles/components/navBarStyles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconButton from '../../reusable/IconButton';

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isMainScreen = route.name === 'Home';

  return (
    <View style={navBarStyles.container}>
      <LinearGradient
        colors={['transparent', 'rgba(115,83,182, 0.2)']}
        style={navBarStyles.gradientContainer}>
        {!isMainScreen && (
          <View style={navBarStyles.backButtonContainer}>
            <IconButton
              iconName="arrow-left"
              type="font-awesome"
              onPress={() => navigation.goBack()}
              containerStyle={navBarStyles.circularButton}
            />
          </View>
        )}
        <View style={navBarStyles.navBarContainer}>
          <IconButton
            iconName="home"
            type="font-awesome"
            onPress={() => navigation.navigate('Home')}
          />
          <IconButton
            iconName="search"
            type="font-awesome"
            onPress={() => navigation.navigate('SearchScreen')}
          />
          <IconButton
            iconName="receipt"
            type="font-awesome-5"
            onPress={() => navigation.navigate('Purchases')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default NavBar;
