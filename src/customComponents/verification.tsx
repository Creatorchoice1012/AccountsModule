import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OTPVerification = ({ digits , onVerify, onResendOTP }) => {
  const [otpArray, setOtpArray] = useState(new Array(digits).fill(''));
  const [otpError, setOtpError] = useState('');
  const inputRefs = useRef([]);
  const handleChange = (text, index) => {
    const newOtpArray = [...otpArray];
    newOtpArray[index] = text;
    setOtpArray(newOtpArray);

    if (text && index < digits - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerificationPress = () => {
    const otp = otpArray.join('');
    if (validateOtp(otp)) {
      onVerify(otp);
    } else {
      setOtpError(`Invalid ${digits}-digit OTP`);
    }
  };

  const validateOtp = (otp) => {
    if (!otp) {
      setOtpError('OTP is required');
      return false;
    } else if (otp.length !== digits) {
      setOtpError(`OTP must be ${digits} digits`);
      return false;
    } else {
      setOtpError('');
      return true;
    }
  };

  const handleResendOTP = () => {
    setOtpArray(new Array(digits).fill(''));
    inputRefs.current[0].focus();
    onResendOTP && onResendOTP();
  };

  return (
    <View style={styles.verificationcontainer}>
      <Text style={styles.verificationotptext}>
        Please enter the OTP sent to your registered mobile number.
      </Text>
      
      <View style={styles.otpBoxContainer}>
        {otpArray.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {otpError ? <Text style={styles.verificationerrorText}>{otpError}</Text> : null}

      <TouchableOpacity style={styles.verificationbutton} onPress={handleVerificationPress}>
        <Text style={styles.verificationbuttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <View style={styles.verificationinlineTextContainer}>
        <Text style={styles.verificationtext}>Didn't receive OTP?</Text>
        <TouchableOpacity onPress={handleResendOTP}>
          <Text style={styles.verificationregisterLink}> Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  verificationcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  verificationotptext: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  otpBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  otpBox: {
    width: 40,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  verificationerrorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  verificationbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '160%',
    marginBottom: 20,
  },
  verificationbuttonText: {
    color: '#fff',
    fontSize: 16,
    
  },
  verificationinlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  verificationtext: {
    fontSize: 14,
    color: '#333',
  },
  verificationregisterLink: {
    fontSize: 14,
    color: '#007bff',
    marginLeft: 5,
  },
});
