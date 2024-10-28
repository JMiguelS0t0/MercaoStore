import React from 'react';
import {Input} from '@rneui/themed';
import {Icon} from '@rneui/base';
import globalStyles from '../styles/globalStyles';

const CustomInput = ({
  placeholder,
  iconName,
  iconType = 'font-awesome-5',
  keyboardType = 'default',
  secureTextEntry = false,
  inputStyle = {},
  containerStyle = {},
  placeholderTextColor = '#ccc',
  textColor = '#000',errorMessage, errorStyle,
  iconColor = '#000',
  ...props
}) => (
  <Input
    placeholder={placeholder}
    leftIcon={
      <Icon name={iconName} type={iconType} color={iconColor} size={20} />
    }
    inputStyle={[
      {color: textColor, fontFamily: 'Poppins-Regular', fontSize: 15},
      inputStyle,
    ]}
    inputContainerStyle={[globalStyles.inputContainer, containerStyle]}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    placeholderTextColor={placeholderTextColor}
    errorMessage={errorMessage}
    errorStyle={errorStyle}
    {...props}
  />
);

export default CustomInput;
