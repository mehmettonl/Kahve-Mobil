import React from 'react'
import { StyleSheet } from 'react-native';
import { AnaSayfa, Profile } from '../src/screens/index'
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator

    
    initialRouteName='Anaa'
    screenOptions={{headerShown:false}}>

    <Stack.Screen name='AnaSayfa' component={AnaSayfa}/>
    <Stack.Screen name='Profil' component={Profile}/>

    </Stack.Navigator>
  )
}

export default UserStack

