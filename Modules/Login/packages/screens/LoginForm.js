import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import UserInput from '../../../UIkit/components/UserInput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import loginStyl from '../../assets/styles/Login.styl'

const LoginForm = (props) => {
  let [formData, setFormData] = useState({email: '', password: ''}) 

  return (
    <>
      <View style={{flex:1, alignItems: 'center', marginVertical: 20, justifyContent: 'flex-start'}}>
        <UserInput
          icon={<MaterialCommunityIcons name="account" color="grey" size={26} />}
          value={formData.email}
          placeholder="Enter Email"
          placeholderTextColor="grey"
          onChange={(email)=>setFormData({...formData, email}) }
          textContentType="emailAddress"
        />
        <UserInput
          icon={<MaterialCommunityIcons name="lock" color="grey" size={26} />}
          value={formData.password}
          placeholder="Enter Password"
          placeholderTextColor="grey"
          onChange={(password)=>setFormData({...formData, password}) }
          textContentType="password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTitle}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.extraText}>
          <Text>Don't have an account?</Text> 
          <TouchableOpacity onPress={props.onFormChange}>
            <Text style={styles.link}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: `rgb(60,179,113)`,
    height: 45,
    width: '50%',
    marginHorizontal: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }, 
  extraText: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
  },
  link: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: `rgb(0,100,0)`
  }
})

export default LoginForm
