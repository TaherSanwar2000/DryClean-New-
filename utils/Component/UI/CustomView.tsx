// CustomView.js
import React from 'react';
import { View } from 'react-native';
import theme from '../../theme';

const CustomView = ({ children, style, variant }) => {
  // Get the styles for the specified variant from the theme
  const variantStyles = theme.variants[variant] || {};

  // Combine the variant styles with additional styles passed as props
  const customStyle = {
    ...variantStyles,
    ...style,
  };

  return <View style={customStyle}>{children}</View>;
};

export default CustomView;
