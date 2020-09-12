/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthScreen from './Modules/Login/packages/screens/AuthScreen'

const HomeStack = createStackNavigator()

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default App
