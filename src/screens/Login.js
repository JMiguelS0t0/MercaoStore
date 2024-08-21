import React from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import loginStyles from '../styles/screens/Login/loginStyles';
import LogoSection from '../components/Layout/LogoSection';
import SignInForm from '../components/SingInForm';

const Login = () => {
  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LogoSection />
        <SignInForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
