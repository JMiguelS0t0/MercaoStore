import React from 'react';
import {View, Image, Text} from 'react-native';
import CustomInput from '../reusable/CustomInput';
import {Button, Icon} from '@rneui/themed';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import registerFormStyles from '../styles/screens/Register/registerFormStyles';

const RegisterForm = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Home Screen');
    navigation.navigate('Home');
  };

  const handleBack = () => {
    console.log('Login Screen');
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1}}>
      <View style={registerFormStyles.header}>
        <View style={registerFormStyles.headerLeft}>
          <Button
            icon={
              <Icon
                name="arrow-left"
                type="font-awesome-5"
                color="#fff"
                size={20}
              />
            }
            title="Back"
            onPress={handleBack}
            buttonStyle={registerFormStyles.backButton}
            titleStyle={registerFormStyles.backButtonText}
            style={registerFormStyles.backButton}
          />
        </View>
        <Image
          source={require('../assets/Mercao.png')}
          style={globalStyles.smallLogo}
        />
      </View>

      <View style={globalStyles.containerForm}>
        <Text style={registerFormStyles.registerText}>Register</Text>
        <CustomInput
          placeholder="Username"
          iconName="user"
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="Password"
          iconName="key"
          secureTextEntry
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="Email"
          iconName="envelope"
          keyboardType="email-address"
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="Birthday"
          iconName="calendar"
          keyboardType="numeric"
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="Country"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="Department"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="City"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
        />
        <CustomInput
          placeholder="Address"
          iconName="crosshairs"
          containerStyle={globalStyles.backgroundInput}
        />

        <Button
          title="REGISTER"
          buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
          onPress={handleRegister}
        />
      </View>
    </View>
  );
};

export default RegisterForm;
