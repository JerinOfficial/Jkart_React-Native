/* eslint-disable prettier/prettier */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import Home from '../screens/Home';
import About from '../screens/About';

export default function Navigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
