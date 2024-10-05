import React from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from '../Layout/NavBar';
import HeaderApp from '../Layout/HeaderApp';

const MainScreens = ({children, showHeader = true, showNavBar = true}) => (
  <View style={styles.container}>
    {showHeader && <HeaderApp />}
    {children}
    {showNavBar && <NavBar />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreens;
