import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from '../components/Layout/NavBar';
import HeaderApp from '../components/Layout/HeaderApp';
import Detail from '../components/Product/Detail';
import Cards from '../components/Product/Cards';
import Cart from './Cart';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      {/* <Detail /> */}
      {/* <Cards /> */}
      <Cart />
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
