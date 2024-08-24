import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import loginStyles from '../styles/screens/Login/loginStyles';
import LogoSection from '../components/Layout/LogoSection';
import SignInForm from '../components/SingInForm';

const Login = () => {
  return (
    <KeyboardAvoidingView
      style={loginStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={loginStyles.scrollContainer}>
        <LogoSection />
        <SignInForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
