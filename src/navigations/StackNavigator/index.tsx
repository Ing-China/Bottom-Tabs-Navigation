import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackTypes';
import {
  CartScreen,
  HomeScreen,
  NotificationScreen,
  OrderHistoryScreen,
  SearchScreen,
} from '../../screens';

const Stack = createStackNavigator<RootStackParamList>();

export const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: 'Notifications'}}
      />
    </Stack.Navigator>
  );
};
