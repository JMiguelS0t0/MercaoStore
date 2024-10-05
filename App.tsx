import React from 'react';
import AppNavigator from './src/navegation/AppNavigator';
import AppProviders from './src/context/AppProviders';

const App = () => {
  return (
    <AppProviders>
      <AppNavigator />
    </AppProviders>
  );
};

export default App;
