import React from 'react';
import {View} from 'react-native';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import ProfileSection from './ProfileSection';
import AccountCard from './AccountCard';

const AccountScreen = () => {
  return (
    <View style={accountScreenStyles.container}>
      <ProfileSection />

      <View style={accountScreenStyles.cardRow}>
        <AccountCard iconName="credit-card" title="Payment methods" />
        <AccountCard iconName="address-card" title="Account" />
      </View>

      <View style={accountScreenStyles.cardRow}>
        <AccountCard iconName="question-circle" title="Support" />
        <AccountCard iconName="cog" title="Settings" />
      </View>
    </View>
  );
};

export default AccountScreen;
