import React from 'react';
import {Button, Icon} from '@rneui/themed';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';

const AccountCard = ({iconName, title, onPress, solid = false}) => {
  return (
    <Button
      onPress={onPress}
      containerStyle={accountScreenStyles.card}
      buttonStyle={accountScreenStyles.cardButton}
      icon={
        <Icon
          name={iconName}
          type="font-awesome-5"
          color="#fff"
          size={30}
          solid={solid}
          containerStyle={accountScreenStyles.iconContainer}
        />
      }
      title={title}
      titleStyle={accountScreenStyles.cardText}
      iconPosition="top"
    />
  );
};

export default AccountCard;
