import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AnaSayfa = () => {
  return (

  <View style={styles.container}>
    <Text>Ana Sayfa</Text>
  </View>
  )
}

export default AnaSayfa

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

})
