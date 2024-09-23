import React from 'react';
import { SafeAreaView } from 'react-native';
import ForgotPasswordComponent from '../customComponents/forgotComponent'; // Adjust path based on where you saved the component

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ForgotPasswordComponent
        emailField={true} // Show the email field
        usernameField={true} // Show the username field
        placeholder={true} // Display placeholders in input fields
        sendOTPButton={true} // Show the "Send OTP" button
        resetPasswordScreen="ResetPasswordScreen" // Screen to navigate after OTP is sent
      />
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
