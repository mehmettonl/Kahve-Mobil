import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Kayıt olma işlemleri burada yapılacak
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Kayıt Ol</Text>

      <TextInput
        placeholder='Email adresinizi giriniz'
        style={styles.textInputStyle}
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <TextInput
        placeholder='Şifrenizi giriniz'
        style={styles.textInputStyle}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <TextInput
        placeholder='Şifrenizi tekrar giriniz'
        style={styles.textInputStyle}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />

      <Pressable
        onPress={handleSignup}
        style={({ pressed }) => [{
          backgroundColor: pressed ? 'gray' : '#007bff'
        }, styles.button]}
      >
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </Pressable>
    </View>
  )
}

export default SignupPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#007bff',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
