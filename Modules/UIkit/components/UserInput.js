import React from 'react'
import {StyleSheet, View, TextInput, Image} from 'react-native'

const UserInput = (props) => {
    return (
      <View style={styles.wrapper}>
        {props.icon}
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          autoCorrect={props.autoCorrect || false}
          autoCapitalize={props.autoCapitalize || 'none'}
          returnKeyType={props.returnKeyType || 'done'}
          placeholderTextColor={props.placeholderTextColor}
          defaultValue={props.value}
          onChangeText={props.onChange}
          textContentType={props.textContentType || 'none'}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    )
}

export default UserInput

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
    marginLeft: 15
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 9,
    paddingLeft: 10
  }
})