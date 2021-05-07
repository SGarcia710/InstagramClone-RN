import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LoginScreen} from '../screens/Login';
import {HomeScreen} from '../screens/Home';
import {SearchScreen} from '../screens/Search';
import {CreatePostScreen} from '../screens/CreatePost';
import {NotificationsScreen} from '../screens/Notifications';
import {ProfileScreen} from '../screens/Profile';
import {Image, StyleSheet} from 'react-native';

const RootTabs = createBottomTabNavigator();

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

const RootNavigator = () => {
  return (
    <RootTabs.Navigator
      screenOptions={({route, navigation}) => {
        return {
          headerShown: false,
          tabBarIcon: ({focused}) => {
            switch (route.name) {
              case 'Home':
                return focused === true ? (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/home-filled.png')}
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/home-outline.png')}
                  />
                );
              case 'Search':
                return focused === true ? (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/search-filled.png')}
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/search-outline.png')}
                  />
                );
              case 'CreatePost':
                return (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/create-post-outline.png')}
                  />
                );
              case 'Notifications':
                return focused === true ? (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/notifications-filled.png')}
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons/notifications-outline.png')}
                  />
                );
              case 'Profile':
                return (
                  <Image
                    style={[styles.iconStyle]}
                    source={require('../assets/icons/profile.png')}
                  />
                );
            }
          },
        };
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <RootTabs.Screen name="Home" component={HomeScreen} />
      <RootTabs.Screen name="Search" component={SearchScreen} />
      <RootTabs.Screen name="CreatePost" component={CreatePostScreen} />
      <RootTabs.Screen name="Notifications" component={NotificationsScreen} />
      <RootTabs.Screen name="Profile" component={ProfileScreen} />
    </RootTabs.Navigator>
  );
};

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Root" component={RootNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
