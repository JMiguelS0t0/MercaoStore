import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({children}) => (
  <LinearGradient
    colors={['rgba(245, 245, 245,1)', 'rgba(245, 245, 245,1)']}
    start={{x: 0.3, y: 0.0}}
    end={{x: 1.0, y: 1.0}}
    style={{flex: 1}}>
    {children}
  </LinearGradient>
);

export default GradientBackground;
