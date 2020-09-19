import React, {useState} from 'react'
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

import authStyle from '../../assets/styles/AuthScreen.styl'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const bg = require('../../assets/bg.png')

const AuthScreen = () => {
  let buttonOpacity = useState(new Animated.Value(1))[0]
  let [isLogin, setLogin] = useState(false)
  let [isSignUp, setSignup] = useState(false)

  function onClick(btn) {
    if(btn === 'login')
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
      style={{...authStyle.flexOne}}
      >
      <View style={{...authStyle.mainView}}>
        <Animated.View style={{
          ...authStyle.bgContainer, 
          transform: [{
            translateY: buttonOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-(Dimensions.get('window').height)/3, 0],
              extrapolate: 'clamp'
            }),
          }]
        }}>
          <Image source={bg} style={authStyle.bg}/>
        </Animated.View>
        <Animated.View style={{
          ...styles.buttonsView,
          transform: [{
            translateY: buttonOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [(Dimensions.get('window').height)/3, 0],
              extrapolate: 'clamp'
            }),
          }]
        }}>
          <Animated.View style={{opacity: buttonOpacity}}>
            <TouchableOpacity onPress={()=>onClick('login')} style={authStyle.buttons}>
              <Text style={authStyle.buttonTitle}>SIGN IN</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{opacity: buttonOpacity}}>
            <TouchableOpacity onPress={onClick} style={authStyle.buttons}>
              <Text style={authStyle.buttonTitle}>REGISTER</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            ...styles.formContainer,
            top: null,
            height: '33.3%',
            opacity: buttonOpacity.interpolate({
              inputRange: [0,1],
              outputRange: [1,0],
              extrapolate: 'clamp'
            }),
            transform: [{
              translateY: buttonOpacity.interpolate({
                inputRange: [0,1],
                outputRange: [-(Dimensions.get('window').height/10), (Dimensions.get('window').height)/3],
                extrapolate: 'clamp'
              })
            }]
          }}
        >
          {isLogin ? <LoginForm onFormChange={onFormChange}/>: null}
          {isSignUp ? <SignupForm onFormChange={onFormChange}/>: null}
        </Animated.View>
      </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({ 
  formContainer: {
    top: null,
    height: '33.3%',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonsView: {
    height: '33.3%'
  }
})

export default AuthScreen
