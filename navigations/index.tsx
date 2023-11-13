/* eslint-disable prettier/prettier */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import Home from '../screens/Home';
import About from '../screens/About';
import AddToCart from '../screens/AddToCart';
import Login from '../screens/Login';
import Register from '../screens/Register';

export default function Navigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="AddToCart" component={AddToCart} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
