import React, {useContext, useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import ProfileSection from './ProfileSection';
import AccountCard from './AccountCard';
import {AuthContext} from '../../context/AuthContext';

const AccountScreen = () => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);

  const handleLogout = useCallback(() => {
    logout();
    navigation.navigate('Login');
  }, [logout, navigation]);

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
      <View style={accountScreenStyles.cardLogout}>
        <AccountCard
          iconName="arrow-left"
          title="Log Out"
          solid={true}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
