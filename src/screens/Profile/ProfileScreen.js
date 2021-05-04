import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Profile</Text>
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

export default ProfileScreen;
