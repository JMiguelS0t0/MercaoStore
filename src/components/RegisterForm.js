import React from 'react';
import {View, Text, Image} from 'react-native';
import CustomInput from '../reusable/CustomInput';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/base';
import globalStyles from '../styles/globalStyles';
import registerFormStyles from '../styles/screens/Register/registerFormStyles';

const RegisterForm = () => (
  <View style={{flex: 1}}>
    <View style={registerFormStyles.header}>
      <View style={registerFormStyles.headerLeft}>
        <Icon name="arrow-left" type="font-awesome-5" color="#fff" size={20} />
        <Text style={registerFormStyles.backText}>Back</Text>
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
      />
    </View>
  </View>
);

export default RegisterForm;
