import React from 'react'
import {NavigationContainer, StackActions} from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const RootStack = () => {

const isAuth = true

  return (
    <NavigationContainer>

    {
      !isAuth 
            ? <AuthStack/>
            : <UserStack/>
    }

    </NavigationContainer>
  )
}

export default RootStack

