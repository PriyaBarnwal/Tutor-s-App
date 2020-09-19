import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import UserInput from '../../../UIkit/components/UserInput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import signupStyl from '../../assets/styles/Signup.styl'
const SignupForm = (props) => {
  let [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' })

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', marginVertical: 12 }}>
        <UserInput
          icon={<MaterialCommunityIcons name="account-plus" color="grey" size={26} />}
          value={formData.email}
          placeholder="Enter Email"
          placeholderTextColor="grey"
          onChange={(email) => setFormData({ ...formData, email })}
          textContentType="emailAddress"
        />
        <UserInput
          icon={<MaterialCommunityIcons name="lock" color="grey" size={26} />}
          value={formData.password}
          placeholder="Enter Password"
          placeholderTextColor="grey"
          onChange={(password) => setFormData({ ...formData, password })}
          textContentType="password"
          secureTextEntry={true}
        />
        <UserInput
          icon={<MaterialCommunityIcons name="lock-check" color="grey" size={26} />}
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          onChange={(confirmPassword) => setFormData({ ...formData, confirmPassword })}
          textContentType="password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={{ ...signupStyl.buttons }}>
          <Text style={signupStyl.buttonTitle}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={signupStyl.extraText}>
          <Text>Already a User?</Text>
          <TouchableOpacity onPress={props.onFormChange}>
            <Text style={signupStyl.link}>Sign In!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: `rgb(60,179,113)`,
    height: 40,
    width: '40%',
    marginHorizontal: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  extraText: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
  },
  link: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: `rgb(0,100,0)`
  }
})

export default SignupForm
