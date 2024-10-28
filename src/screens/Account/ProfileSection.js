import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from '@rneui/themed';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import globalStyles from '../../styles/globalStyles';
import {UserContext} from '../../context/UserContext';

const ProfileSection = () => {
  const {userProfile} = useContext(UserContext);

  console.log('ProfileSection - Loaded userProfile:', userProfile);

  return (
    <View style={accountScreenStyles.pfpStyle}>
      <Avatar
        size="large"
        rounded
        title={
          userProfile?.username
            ? userProfile.username.charAt(0).toUpperCase()
            : 'U'
        }
        containerStyle={globalStyles.avatar}
      />
      <Text style={accountScreenStyles.text}>
        {userProfile?.name || 'Guest'}
      </Text>
      <Text style={accountScreenStyles.subtitles}>
        {userProfile?.email || 'No email'}
      </Text>
    </View>
  );
};

export default ProfileSection;
