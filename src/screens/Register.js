import React from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import loginStyles from '../styles/screens/Login/loginStyles';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <RegisterForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
