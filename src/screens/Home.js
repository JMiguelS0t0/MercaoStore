import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from '../components/Layout/NavBar';
import HeaderApp from '../components/Layout/HeaderApp';
import Detail from '../components/Product/Detail';
import Cards from '../components/Product/Cards';
import Cart from './Cart';
import AccountScreen from './Account/AccountScreen';
import EditAccount from './Account/EditAccount';
import Support from './Support';
import Purchases from './Purchase/Purchases';
import Favorites from './Favorites';
import SearchScreen from './Search/SearchScreen';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      {/* <Detail /> */}
      {/* <Cards /> */}
      {/* <Cart /> */}
      {/* <AccountScreen /> */}
      {/* <EditAccount /> */}
      {/* <Support /> */}
      {/* <Purchases /> */}
      {/* <Favorites /> */}
      <SearchScreen />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default Home;
