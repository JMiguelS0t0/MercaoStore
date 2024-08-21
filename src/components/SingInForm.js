import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import signInFormStyles from '../styles/screens/Login/singInFormStyles';
import globalStyles from '../styles/globalStyles';
import CustomInput from '../reusable/CustomInput';

const SignInForm = () => (
  <View style={[globalStyles.containerForm, signInFormStyles.colorForm]}>
    <Text style={signInFormStyles.loginText}>Sign in</Text>

    <CustomInput
      placeholder="Email"
      iconName="user"
      keyboardType="email-address"
      textColor="#000"
      iconColor="#beb5c5"
      containerStyle={signInFormStyles.inputContainer}
    />

    <CustomInput
      placeholder="Password"
      iconName="key"
      secureTextEntry
      textColor="#000"
      iconColor="#beb5c5"
      containerStyle={signInFormStyles.inputContainer}
    />

    <Button title="LOGIN" buttonStyle={globalStyles.buttonStyle} />

    <Text style={signInFormStyles.createText}>
      Don't have an account?{' '}
      <Text style={signInFormStyles.createTextHighlight}>
        Create a new account
      </Text>
    </Text>
  </View>
);

export default SignInForm;
