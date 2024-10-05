import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from '@rneui/themed';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import globalStyles from '../../styles/globalStyles';
import {UserContext} from '../../context/UserContext';

const ProfileSection = () => {
  const {userProfile} = useContext(UserContext);

  return (
    <View style={accountScreenStyles.pfpStyle}>
      <Avatar
        size="large"
        rounded
        title={
          userProfile?.name ? userProfile.name.charAt(0).toUpperCase() : 'U'
        }
        containerStyle={globalStyles.avatar}
      />
      <Text style={accountScreenStyles.text}>
        {userProfile?.name ? userProfile.name : 'Guest'}
      </Text>
      <Text style={accountScreenStyles.subtitles}>
        {userProfile?.email ? userProfile.email : 'No email'}
      </Text>
    </View>
  );
};

export default ProfileSection;
