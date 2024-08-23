import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import signInFormStyles from '../styles/screens/Login/singInFormStyles';
import globalStyles from '../styles/globalStyles';
import CustomInput from '../reusable/CustomInput';

const SignInForm = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Home Screen');
    navigation.navigate('Home');
  };

  const handleCreateAccount = () => {
    console.log('Create account screen');
    navigation.navigate('Register');
  };

  return (
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

      <Button
        title="LOGIN"
        buttonStyle={globalStyles.buttonStyle}
        onPress={handleLogin}
      />

      <Text style={signInFormStyles.createText}>
        Don't have an account?
        <Button
          title="Create a New Account"
          type="clear"
          titleStyle={signInFormStyles.createTextHighlight}
          onPress={handleCreateAccount}
          containerStyle={signInFormStyles.createAccountButton}
        />
      </Text>
    </View>
  );
};

export default SignInForm;
