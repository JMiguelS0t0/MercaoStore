import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from '../components/Layout/NavBar';
import HeaderApp from '../components/Layout/HeaderApp';
import Cards from '../components/Product/Cards';
import {ProductContext} from '../context/ProductContext';

const Home = () => {
  const {products} = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <HeaderApp />
      <Cards products={products} />
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
