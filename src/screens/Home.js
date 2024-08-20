import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from '../components/NavBar';
import HeaderApp from '../components/HeaderApp';
import Detail from '../components/Detail';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <Detail />
      {/* <Cards /> */}
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
