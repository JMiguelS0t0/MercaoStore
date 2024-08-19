import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavBar from './src/components/NavBar';
import HeaderApp from './src/components/HeaderApp';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const App = () => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <NavBar />
      {/* <Login /> */}
      {/* <Register /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120b34',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  listContainer: {
    paddingBottom: 80,
  },
});

export default App;