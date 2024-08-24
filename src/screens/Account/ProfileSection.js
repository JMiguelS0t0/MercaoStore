import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from '@rneui/themed';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import globalStyles from '../../styles/globalStyles';

const ProfileSection = () => {
  return (
    <View style={accountScreenStyles.pfpStyle}>
      <Avatar
        size="large"
        rounded
        title="J"
        containerStyle={globalStyles.avatar}
      />
      <Text style={accountScreenStyles.text}>Juan Miguel</Text>
      <Text style={accountScreenStyles.subtitles}>
        juan.soto60@correo.tdea.edu.co
      </Text>
    </View>
  );
};

export default ProfileSection;
