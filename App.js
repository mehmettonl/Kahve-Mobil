import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './src/screens/LoginPage'
import SignupPage from './src/screens/SignupPage'
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    
    <Stack.Screen name='Giriş' component={LoginPage}/>
    <Stack.Screen name='Sign Up' component={SignupPage}/>

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})