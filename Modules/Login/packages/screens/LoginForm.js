import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-paper'

import UserInput from '../../../UIkit/components/UserInput'

import loginStyl from '../../assets/styles/Login.styl'

const LoginForm = (props) => {
  let [formData, setFormData] = useState({ email: '', password: '' })

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', marginVertical: 20, justifyContent: 'flex-start' }}>
        <UserInput
          icon={<MaterialCommunityIcons name="account" color="grey" size={26} />}
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

        <Button
          color={'#47c17e'}
          dark={true}
          style={{ margin: 10, minWidth: 150 }}
          mode={'contained'}
          onPress={() => alert('clicked paper')}
        >
          SIGN IN
        </Button>

        <View style={styles.extraText}>
          <Text>Don't have an account?</Text>
          <Button
            style={{ marginLeft: 10 }}
            dark={true}
            color={'green'}
            onPress={() => alert('redirect to Signup')}
          >
            Sign Up!
          </Button>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  extraText: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoginForm
