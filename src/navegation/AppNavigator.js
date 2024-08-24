import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import DetailScreen from '../components/Product/Detail';
import CartScreen from '../screens/Cart';
import AccountScreen from '../screens/Account/AccountScreen';
import EditAccountScreen from '../screens/Account/EditAccount';
import SupportScreen from '../screens/Support';
import FavoritesScreen from '../screens/Favorites';
import SearchScreen from '../screens/Search/SearchScreen';
import PurchasesScreen from '../screens/Purchase/Purchases';
import HeaderApp from '../components/Layout/HeaderApp';
import NavBar from '../components/Layout/NavBar';

const Stack = createStackNavigator();

const GradientBackground = ({children}) => (
  <LinearGradient
    colors={['rgba(67,56,131,1)', 'rgba(13,10,32,1)']}
    start={{x: 0.3, y: 0.0}}
    end={{x: 1.0, y: 1.0}}
    style={{flex: 1}}>
    {children}
  </LinearGradient>
);

const MainScreens = ({children}) => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      {children}
      <NavBar />
    </View>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled: true,
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="Login">
          {props => (
            <GradientBackground>
              <LoginScreen {...props} />
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => (
            <GradientBackground>
              <RegisterScreen {...props} />
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => (
            <GradientBackground>
              <MainScreens>
                <HomeScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Detail">
          {props => (
            <GradientBackground>
              <MainScreens>
                <DetailScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => (
            <GradientBackground>
              <MainScreens>
                <CartScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Account">
          {props => (
            <GradientBackground>
              <MainScreens>
                <AccountScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="EditAccount">
          {props => (
            <GradientBackground>
              <MainScreens>
                <EditAccountScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Support">
          {props => (
            <GradientBackground>
              <MainScreens>
                <SupportScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Favorites">
          {props => (
            <GradientBackground>
              <MainScreens>
                <FavoritesScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="SearchScreen">
          {props => (
            <GradientBackground>
              <MainScreens>
                <SearchScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Purchases">
          {props => (
            <GradientBackground>
              <MainScreens>
                <PurchasesScreen {...props} />
              </MainScreens>
            </GradientBackground>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
