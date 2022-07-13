import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Liked, Movies} from '../../screens';
import {View, StatusBar} from 'react-native';

export const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',

        },
        // headerStyle: {height: 80},
        header: () => {
          return <View style={{height: 80, backgroundColor: 'black'}}></View>;
        },
        // headerShown:false
      }}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Liked" component={Liked} />
    </Tab.Navigator>
  );
};
