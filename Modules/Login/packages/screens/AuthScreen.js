import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native'

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
      <View style={{flex:1, justifyContent: 'flex-end'}}>
        <Animated.View style={{
          ...styles.bgContainer, 
          transform: [{
            translateY: buttonOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-(Dimensions.get('window').height)/3, 0],
              extrapolate: 'clamp'
            }),
          }]
        }}>
          <Image source={bg} style={styles.bg}/>
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
            <TouchableOpacity onPress={()=>onClick('login')} style={styles.buttons}>
              <Text style={styles.buttonTitle}>SIGN IN</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{opacity: buttonOpacity}}>
            <TouchableOpacity onPress={onClick} style={styles.buttons}>
              <Text style={styles.buttonTitle}>REGISTER</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={{
            ...styles.formContainer,
            opacity: buttonOpacity.interpolate({
              inputRange: [0,1],
              outputRange: [1,0],
              extrapolate: 'clamp'
            }),
            transform: [{
              translateY: buttonOpacity.interpolate({
                inputRange: [0,1],
                outputRange: [0, (Dimensions.get('window').height)/3],
                extrapolate: 'clamp'
              })
            }]
          }}
        >
          {isLogin ? <LoginForm onFormChange={onFormChange}/>: null}
          {isSignUp ? <SignupForm onFormChange={onFormChange}/>: null}
        </Animated.View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  bg: {
    flex: 1,
    height: null,
    width: null
  },
  buttonsView: {
    height: '33.3%'
  },
  buttons: {
    backgroundColor: `rgba(0,0,0,0.7)`,
    height: 70,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }, 
  formContainer: {
    ...StyleSheet.absoluteFillObject,
    top: null,
    height: '33.3%',
    justifyContent: 'center'
  }
})

export default AuthScreen
