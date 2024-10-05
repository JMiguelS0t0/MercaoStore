import React from 'react';
import GradientBackground from './GradientBackground';
import MainScreens from './MainScreens';

const ScreenWithBackground = ({
  Component,
  showHeader = true,
  showNavBar = true,
  ...props
}) => (
  <GradientBackground>
    <MainScreens showHeader={showHeader} showNavBar={showNavBar}>
      <Component {...props} />
    </MainScreens>
  </GradientBackground>
);

export default ScreenWithBackground;
