import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {RootStackParamList} from '../../types/RootStackTypes';
import {NavigationContainer} from '@react-navigation/native';
import {NotificationScreen} from '../../screens';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
        <RootStack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
