import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import ScreenWithBackground from '../components/navegation/ScreenWithBackground';

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
import PaymentScreen from '../screens/Payment/PaymentScreen';
import ProductsListScreen from '../screens/Search/ProductsListScreen';
import PaymentForm from '../components/Payment/PaymentForm';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Login">
          {props => (
            <ScreenWithBackground
              Component={LoginScreen}
              showHeader={false}
              showNavBar={false}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => (
            <ScreenWithBackground
              Component={RegisterScreen}
              showHeader={false}
              showNavBar={false}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <ScreenWithBackground Component={HomeScreen} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Detail">
          {props => (
            <ScreenWithBackground Component={DetailScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => <ScreenWithBackground Component={CartScreen} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Account">
          {props => (
            <ScreenWithBackground Component={AccountScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="EditAccount">
          {props => (
            <ScreenWithBackground Component={EditAccountScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Support">
          {props => (
            <ScreenWithBackground Component={SupportScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Favorites">
          {props => (
            <ScreenWithBackground Component={FavoritesScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="SearchScreen">
          {props => (
            <ScreenWithBackground Component={SearchScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="ProductsList">
          {props => (
            <ScreenWithBackground Component={ProductsListScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Purchases">
          {props => (
            <ScreenWithBackground Component={PurchasesScreen} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Payment">
          {props => (
            <ScreenWithBackground
              Component={PaymentScreen}
              showHeader={false}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="PaymentForm">
          {props => (
            <ScreenWithBackground
              Component={PaymentForm}
              showHeader={false}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
