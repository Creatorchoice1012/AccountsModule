import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import ForgotPasswordScreen from './src/Screens/forgotPasswordScreen';
import HomeScreen from './src/Screens/Dashboard';
import VerifyScreen from './src/Screens/verifyScreen';
import PrivactyPolicyScreen from './src/Screens/Privacypolicy';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide headers globally
          gestureEnabled: true, // Enable swipe gestures
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Use horizontal sliding transition
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Verifyotp" component={VerifyScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivactyPolicyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
