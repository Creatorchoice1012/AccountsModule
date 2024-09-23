import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Image,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = ({
  username = false,
  placeholder = false,
  rememberMeCheckbox = false,
  forgotPasswordText = false,
  passwordField = false,
  signInProviders = [], // Array to specify which sign-in buttons to show
  onSubmit, // Callback to return entered values to the main screen
  signUpScreen = 'SignUpScreen',
  forgotPasswordScreen = 'ForgotPasswordScreen',
  privacypolicy = '',
  appVersion = '1.0.0',
}) => {
  const [usernameValue, setUsername] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const navigation = useNavigation();
  const handleSubmit = () => {
    let valid = true;

    if (!usernameValue) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!passwordValue) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      const enteredValues = {
        username: usernameValue,
        password: passwordValue,
        rememberMe,
      };
      // Return entered values to the main screen
      onSubmit(enteredValues);
    }
  };

  const providerIcons = {
    google: 'https://img.icons8.com/color/48/000000/google-logo.png',
    facebook: 'https://img.icons8.com/ios-filled/50/000000/facebook.png',
    microsoft: 'https://img.icons8.com/ios-filled/50/000000/microsoft.png',
    apple: 'https://img.icons8.com/ios-filled/50/ffffff/mac-os.png',
    amazon: 'https://img.icons8.com/color/48/000000/amazon.png',
    twitter: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
    linkedin: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
    github: 'https://img.icons8.com/ios-filled/50/000000/github.png',
    yahoo: 'https://img.icons8.com/color/48/000000/yahoo.png',
    dropbox: 'https://img.icons8.com/ios-filled/50/000000/dropbox.png',
    paypal: 'https://img.icons8.com/ios-filled/50/000000/paypal.png',
    slack: 'https://img.icons8.com/ios-filled/50/000000/slack.png',
    spotify: 'https://img.icons8.com/ios-filled/50/000000/spotify.png',
    instagram: 'https://img.icons8.com/ios-filled/50/000000/instagram-new.png',
    netflix: 'https://img.icons8.com/ios-filled/50/000000/netflix.png',
    pinterest: 'https://img.icons8.com/ios-filled/50/000000/pinterest.png',
    adobe: 'https://img.icons8.com/ios-filled/50/000000/adobe.png',
    skype: 'https://img.icons8.com/ios-filled/50/000000/skype.png',
    telegram: 'https://img.icons8.com/ios-filled/50/000000/telegram.png',
    whatsapp: 'https://img.icons8.com/ios-filled/50/000000/whatsapp.png'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {username && (
        <>
          <TextInput
            style={styles.input}
            placeholder={placeholder ? 'Username' : ''}
            placeholderTextColor="#666"
            value={usernameValue}
            onChangeText={setUsername}
          />
          {usernameError ? (
            <Text style={styles.errorText}>{usernameError}</Text>
          ) : null}
        </>
      )}
      {passwordField && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            value={passwordValue}
            onChangeText={setPassword}
            secureTextEntry
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </>
      )}
      {passwordField && (
        <View style={styles.rememberForgotContainer}>
          {rememberMeCheckbox && (
            <View style={styles.rememberMeContainer}>
              <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                tintColors={{ true: '#6200ee', false: '#999' }}
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
          )}
          {forgotPasswordText && (
            <TouchableOpacity onPress={() => navigation.navigate(forgotPasswordScreen)}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {username && passwordField && (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.orText}>or</Text>

      {signInProviders.map((provider) => (
        <TouchableOpacity
          key={provider}
          style={[styles.socialButton, styles[`${provider}Button`]]}
          onPress={() => console.log(`${provider} Sign In`)}
        >
          <Image
            source={{ uri: providerIcons[provider] }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>
            Sign up with {provider.charAt(0).toUpperCase() + provider.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => navigation.navigate(signUpScreen)}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.versionText}>Version {appVersion}</Text>
        <TouchableOpacity onPress={() =>navigation.navigate(privacypolicy)}>
          <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#e8e8e8',
    color: '#333',
    borderWidth: 0.3,
  },
  forgotPassword: {
    color: '#007AFF',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    color: '#666',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 25,
    marginVertical: 5,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  twitterButton: {
    backgroundColor: '#1DA1F2',
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  githubButton: {
    backgroundColor: '#333',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  amazonButton: {
    backgroundColor: '#FF9900',
  },
  spotifyButton: {
    backgroundColor: '#1DB954',
  },
  instagramButton: {
    backgroundColor: '#C13584',
  },
  netflixButton: {
    backgroundColor: '#E50914',
  },
  pinterestButton: {
    backgroundColor: '#E60023',
  },
  adobeButton: {
    backgroundColor: '#FF0000',
  },
  skypeButton: {
    backgroundColor: '#00AFF0',
  },
  telegramButton: {
    backgroundColor: '#0088CC',
  },
  dropboxButton: {
    backgroundColor: '#0061FE',
  },
  paypalButton: {
    backgroundColor: '#003087',
  },
  slackButton: {
    backgroundColor: '#4A154B',
  },
  privacyPolicyText: {
    color: '#007AFF',
  },
  versionText: {
    color: '#666',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  signUpText: {
    marginTop: 20,
    color: '#007AFF',
  },
  signUpLink: {
    fontWeight: 'bold',
  },
});

export default LoginComponent;
