import React from 'react';
import {Text} from 'react-native';
import {Card, Icon} from '@rneui/themed';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';

const AccountCard = ({iconName, title}) => {
  return (
    <Card containerStyle={accountScreenStyles.card}>
      <Icon
        name={iconName}
        type="font-awesome-5"
        color="#fff"
        size={30}
        containerStyle={accountScreenStyles.iconContainer}
      />
      <Text style={accountScreenStyles.cardText}>{title}</Text>
    </Card>
  );
};

export default AccountCard;
