import React from 'react';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';

const CustomTouchableOpacity = ({ children, style, variant, ...props }) => {
  // Get the styles for the specified variant from the theme
  const variantStyles = theme.variants[variant] || {};

  // Combine the variant styles with additional styles passed as props
  const customStyle = {
    ...variantStyles,
    ...style,
  };

  return (
    <TouchableOpacity style={customStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
