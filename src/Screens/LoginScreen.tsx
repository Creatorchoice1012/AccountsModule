import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import LoginComponent from '../customComponents/login';

const LoginScreen = ({navigation}) => {
  const handleLoginSubmit = (enteredValues) => {
    console.log('Entered Values:', enteredValues);
    navigation.navigate('Home');
    // Handle login process here
  };
  return (
    <LoginComponent
      username={true}
      placeholder={true}
      passwordField={true}
      rememberMeCheckbox={true}
      forgotPasswordText={true}
      signInProviders={['google', 'facebook','whatsapp']}
      onSubmit={handleLoginSubmit}
      signUpScreen="Signup"
      forgotPasswordScreen="ForgotPassword"
      privacypolicy="PrivacyPolicy"
      appVersion = '1.0.0'

    />

  );
};

export default LoginScreen;
