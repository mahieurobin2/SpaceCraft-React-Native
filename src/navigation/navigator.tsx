import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { Routes } from './Routes';
import FeedScreen from '../Screens/FeedScreen';

const screenOptions={ headerShown: false }
type Props = {};


const Stack = createNativeStackNavigator();
const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

