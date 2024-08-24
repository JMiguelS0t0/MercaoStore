import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import ProfileSection from './ProfileSection';
import AccountCard from './AccountCard';

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={accountScreenStyles.container}>
      <ProfileSection />

      <View style={accountScreenStyles.cardRow}>
        <AccountCard
          iconName="address-card"
          title="Account"
          onPress={() => navigation.navigate('EditAccount')}
        />
        <AccountCard
          iconName="question-circle"
          title="Support"
          onPress={() => navigation.navigate('Support')}
        />
      </View>

      <View style={accountScreenStyles.cardFavorites}>
        <AccountCard
          iconName="heart"
          title="My Favorites"
          solid={true}
          onPress={() => navigation.navigate('Favorites')}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
