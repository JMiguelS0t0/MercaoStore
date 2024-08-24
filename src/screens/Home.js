import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from '../components/Layout/NavBar';
import HeaderApp from '../components/Layout/HeaderApp';
import Cards from '../components/Product/Cards';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <Cards />
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
