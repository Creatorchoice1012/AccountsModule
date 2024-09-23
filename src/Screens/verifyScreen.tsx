import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import OTPVerification from '../customComponents/verification';

const VerifyScreen = () => {
  const handleOtpVerification = otp => {
    // Logic to verify OTP goes here
    console.log(`Entered OTP: ${otp}`);

    // Example: If OTP is correct, navigate to the next screen
    // if (otp === '123456') {
    //   console.log('OTP Verified Successfully!');
    //   // navigation.navigate('NextScreen');
    // } else {
    //   console.log('Incorrect OTP');
    // }
  };
  const resendOtp = () => {
    console.log('Resend OTP');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <OTPVerification
        digits={4} // Specify the number of OTP digits required
        onVerify={handleOtpVerification} // Pass the verification handler function
        onResendOTP={resendOtp}
      />
    </View>
  );
};

export default VerifyScreen;
