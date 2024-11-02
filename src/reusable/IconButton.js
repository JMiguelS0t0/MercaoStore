import React from 'react';
import {Button, Icon} from '@rneui/themed';

const IconButton = ({iconName, type, onPress, containerStyle}) => (
  <Button
    onPress={onPress}
    buttonStyle={{backgroundColor: 'transparent'}}
    containerStyle={containerStyle}
    icon={<Icon name={iconName} type={type} color="#000" size={20} />}
  />
);

export default IconButton;
