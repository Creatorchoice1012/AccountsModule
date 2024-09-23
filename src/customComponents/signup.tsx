import React from 'react';
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
import { useNavigation } from '@react-navigation/native';

const SignUpComponent = ({
  username = true,
  placeholder = true,
  emailField = true,
  passwordField = true,
  confirmPasswordField = true,
  rememberMeCheckbox = false,
  signUpButton = true,
  mobileNumber='',
  signInScreen = 'LoginScreen', // default login screen
  verifyScreen='verifyScreen'
}) => {
  const [usernameValue, setUsername] = React.useState('');
  const [emailValue, setEmail] = React.useState('');
  const [mobileNumberValue, setMobileNumber] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [confirmPasswordValue, setConfirmPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const scheme = useColorScheme(); // Determines light or dark mode
  const isDarkMode = scheme === 'dark';

  const navigation = useNavigation(); // Hook to access navigation

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log(`Username: ${usernameValue}, Email: ${emailValue}, Password: ${passwordValue}, Confirm Password: ${confirmPasswordValue}, Remember Me: ${rememberMe}`);
    navigation.navigate(verifyScreen,{mobileNumber,email:emailValue,username:usernameValue});
  };

  const handleSignIn = () => {
    // Navigate to the login screen
    navigation.navigate(signInScreen);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>Sign Up</Text>
      
      {username && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder={placeholder ? "Username" : ''}
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={usernameValue}
          onChangeText={setUsername}
        />
      )}
         {mobileNumber && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder={placeholder ? "Mobile Number" : ''}
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={mobileNumberValue}
          onChangeText={setMobileNumber}
        />
      )}

      {emailField && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Email"
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={emailValue}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      )}

      {passwordField && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Password"
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={passwordValue}
          onChangeText={setPassword}
          secureTextEntry
        />
      )}

      {confirmPasswordField && (
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Confirm Password"
          placeholderTextColor={isDarkMode ? '#999' : '#666'}
          value={confirmPasswordValue}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}

      {rememberMeCheckbox && (
        <View style={styles.rememberMeContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            tintColors={{ true: isDarkMode ? '#bb86fc' : '#6200ee', false: isDarkMode ? '#666' : '#999' }}
          />
          <Text style={[styles.rememberMeText, isDarkMode && styles.rememberMeTextDark]}>
            Remember Me
          </Text>
        </View>
      )}

      {signUpButton && (
        <TouchableOpacity
          style={[styles.button, isDarkMode && styles.buttonDark]}
          onPress={handleSignUp}
        >
          <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>Send OTP</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleSignIn}>
        <Text style={[styles.signInText, isDarkMode && styles.signInTextDark]}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
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
    borderWidth:0.2
  },
  inputDark: {
    backgroundColor: '#333',
    color: '#f2f2f2',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rememberMeText: {
    color: '#666',
    marginLeft: 8,
  },
  rememberMeTextDark: {
    color: '#bbb',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDark: {
    color: '#fff',
  },
  signInText: {
    fontSize: 14,
    color: '#666',
  },
  signInTextDark: {
    color: '#bbb',
  },
  signInLink: {
    color: '#007AFF',
  },
});

export default SignUpComponent;
