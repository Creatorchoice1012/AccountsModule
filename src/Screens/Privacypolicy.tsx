import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PrivactyPolicyScreen = () => {
  return (
    <View style={styles.container}>
     
     <Text>Privacy Policy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default PrivactyPolicyScreen;
