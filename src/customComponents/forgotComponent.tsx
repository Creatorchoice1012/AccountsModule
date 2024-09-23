import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordComponent = ({
  emailField = true, // Option to include email field
  usernameField = true, // Option to include username field
  placeholder = true, // Placeholder text for fields
  sendOTPButton = true, // Option to include a send OTP button
  resetPasswordScreen = 'ResetPasswordScreen', // Default screen to navigate for resetting password
  sendOTP='Verifyotp'
}) => {
  const [emailValue, setEmail] = React.useState('');
  const [usernameValue, setUsername] = React.useState('');
  const scheme = useColorScheme(); // Determines light or dark mode
  const isDarkMode = scheme === 'dark';

  const navigation = useNavigation(); // Hook to access navigation

  const handleSendOTP = () => {
    // Handle sending OTP logic here
    console.log(`Email: ${emailValue}, Username: ${usernameValue}`);
    navigation.navigate(sendOTP); // Navigate to the reset password screen
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>Forgot Password</Text>

      {emailField && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder={placeholder ? 'Email' : ''}
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={emailValue}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      )}

      {usernameField && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder={placeholder ? 'Username' : ''}
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={usernameValue}
          onChangeText={setUsername}
        />
      )}

      {sendOTPButton && (
        <TouchableOpacity
          style={[styles.button, isDarkMode && styles.buttonDark]}
          onPress={handleSendOTP}
        >
          <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>Send OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  titleDark: {
    color: '#f2f2f2',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#e8e8e8',
    color: '#333',
    borderWidth: 0.2,
  },
  inputDark: {
    backgroundColor: '#333',
    color: '#f2f2f2',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonDark: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
  },
 buttonTextDark: {
    color: '#f2f2f2',
  },
});

export default ForgotPasswordComponent;
