import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default LoginScreen;
