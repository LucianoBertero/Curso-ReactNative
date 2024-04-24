/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

// import {NavigationContainer} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Text, useColorScheme, View} from 'react-native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator></StackNavigator> */}

      <SideMenuNavigator></SideMenuNavigator>
      {/* <BottomTabsNavigator></BottomTabsNavigator> */}
    </NavigationContainer>
  );
}

export default App;
//
