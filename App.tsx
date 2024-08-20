import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const App = () => {
  return (
    <LinearGradient
      colors={['rgba(67,56,131,1)', 'rgba(13,10,32,1)']}
      start={{x: 0.3, y: 0.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.container}>
      <Home />
      {/* <Login /> */}
      {/* <Register /> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
