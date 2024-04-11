/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Text, useColorScheme, View} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <View>
        <Text>Hola</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
