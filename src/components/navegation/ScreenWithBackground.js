import React from 'react';
import GradientBackground from './GradientBackground';
import MainScreens from './MainScreens';

const ScreenWithBackground = ({Component, showHeader = true, ...props}) => (
  <GradientBackground>
    <MainScreens showHeader={showHeader}>
      <Component {...props} />
    </MainScreens>
  </GradientBackground>
);

export default ScreenWithBackground;
