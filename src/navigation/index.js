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

const RootTabs = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <RootTabs.Navigator>
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
      <Stack.Navigator>
        <Stack.Screen name="Root" component={RootNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
