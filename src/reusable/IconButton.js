import React from 'react';
import {Button, Icon} from '@rneui/themed';

const IconButton = ({iconName, type, onPress, containerStyle}) => (
  <Button
    onPress={onPress}
    buttonStyle={{backgroundColor: 'transparent'}}
    containerStyle={containerStyle}
    icon={<Icon name={iconName} type={type} color="#beb5c5" size={20} />}
  />
);

export default IconButton;
