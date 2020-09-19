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

import Authentication from './Modules/Login/packages/screens/Authentication'

const HomeStack = createStackNavigator()

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Auth" component={Authentication} options={{ headerShown: false }} />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default App
