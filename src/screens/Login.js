import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import loginStyles from '../styles/screens/loginStyles';
import {Input, Button} from '@rneui/themed';
import {Icon} from '@rneui/base';

const Login = () => {
  return (
    <KeyboardAvoidingView
      style={loginStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={loginStyles.logoContainer}>
          <Image
            source={require('../assets/Logo.png')}
            style={loginStyles.logo}
          />
        </View>
        <View style={loginStyles.containerLogin}>
          <Text style={loginStyles.loginText}>Sign in</Text>
          <Input
            placeholder="Email"
            leftIcon={
              <Icon
                name="user"
                type="font-awesome-5"
                color="#beb5c5"
                size={20}
              />
            }
            inputContainerStyle={loginStyles.inputContainer}
          />
          <Input
            placeholder="Password"
            leftIcon={
              <Icon
                name="key"
                type="font-awesome-5"
                color="#beb5c5"
                size={20}
              />
            }
            inputContainerStyle={loginStyles.inputContainer}
          />
          <Button title="LOGIN" buttonStyle={loginStyles.buttonStyle} />
          <Text style={loginStyles.createText}>
            Don't have an account? Create a new account
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
