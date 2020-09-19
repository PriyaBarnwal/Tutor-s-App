import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { Button } from 'react-native-paper'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

import styles from '../../assets/styles/Authentication.styl'

const bg = require('../../assets/bg.png')

const Authentication = () => {
  let buttonOpacity = useState(new Animated.Value(1))[0]
  let [isLogin, setLogin] = useState(false)
  let [isSignUp, setSignup] = useState(false)

  function onClick(btn) {
    if (btn === 'login')
      setLogin(true)
    else
      setSignup(true)

    Animated.timing(buttonOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  function onFormChange() {
    setSignup(!isSignUp)
    setLogin(!isLogin)
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.flexOne}
      >
        <View style={styles.mainView}>
          <Animated.View
            style={[
              styles.bgContainer,
              {
                transform: [{
                  translateY: buttonOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-(Dimensions.get('window').height) / 3, 0],
                    extrapolate: 'clamp'
                  }),
                }]
              }
            ]}
          >
            <Image
              source={bg}
              style={styles.bg}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.buttonsView,
              {
                transform: [{
                  translateY: buttonOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(Dimensions.get('window').height) / 3, 0],
                    extrapolate: 'clamp'
                  }),
                }]
              }
            ]}>
            <Button
              dark={true}
              mode={'text'}
              color={'#000'}
              style={[styles.buttons]}
              labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
              onPress={() => onClick('login')}
            >
              SIGN IN
            </Button>
            <Button
              dark={true}
              mode={'text'}
              color={'#000'}
              style={[styles.buttons]}
              labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
              onPress={onClick}
            >
              REGISTER
            </Button>
          </Animated.View>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              styles.formContainer,
              {
                transform: [{
                  translateY: buttonOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-(Dimensions.get('window').height / 10), (Dimensions.get('window').height) / 3],
                    extrapolate: 'clamp'
                  })
                }]
              }

            ]}
          >
            {isLogin ? <LoginForm onFormChange={onFormChange} /> : null}
            {isSignUp ? <SignupForm onFormChange={onFormChange} /> : null}
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default Authentication
