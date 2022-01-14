import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
// import { Dogs } from '../screens/Dogs';

import { MainParamList } from './types';

const Stack = createNativeStackNavigator<MainParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Dogs" component={Dogs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
