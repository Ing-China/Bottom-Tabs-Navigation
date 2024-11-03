import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types/BottomTabTypes';
import {
  CartScreen,
  HomeScreen,
  OrderHistoryScreen,
  ProfileScreen,
  SearchScreen,
} from '../../screens';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};
