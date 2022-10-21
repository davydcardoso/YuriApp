import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/Public/Login';
import {RequestMechanic} from '../screens/Public/RequestMechanic';

const Stack = createNativeStackNavigator();

export const PublicRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="RequestMechanic"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="RequestMechanic" component={RequestMechanic} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
