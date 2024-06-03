import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder}) => {
  return (

    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%', 
    borderColor: 'white',  
    alignItems: 'center', 
  },
  inputBoxText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 2,
    fontSize: 20, 
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 20,
    marginVertical: 8,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
})