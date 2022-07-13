/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainTabNavigator} from './src/navigation';
import {StatusBar, View} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="#00000"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
