import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation(); // useNavigation hook'u kullanılarak navigation nesnesi alınıyor
  const [email, setEmail] = useState("");
  const [şifre, setŞifre] = useState('');
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  const handleLogin = () => {
    setIsLoading(true);
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <Text style={styles.hoşgeldinizText}>Hoşgeldiniz {email}</Text>
        <Text style={styles.inputBoxText}>Email</Text>
        <TextInput
          inputMode='email'
          placeholder='Email adresinizi giriniz'
          style={styles.textInputStyle}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      
      <View style={styles.inputContainer}>   
        <Text style={styles.inputBoxText}>Şifre</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Şifrenizi giriniz'
          style={styles.textInputStyle}
          onChangeText={setŞifre}
        />
      </View>
      
      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => [{
          backgroundColor: pressed ? 'gray' : '#7fff00'
        }, styles.button]}
      >
        <Text style={styles.buttonText}>Giriş</Text>
      </Pressable>

      <Pressable
        onPress={handleSignup}
        style={({ pressed }) => [{
          backgroundColor: pressed ? 'gray' : '#7fff00',
          marginTop: 15,
        }, styles.kayıtOlButton]}
      >
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </Pressable>

      {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}

      <Image
        style={styles.stretch}
        source={require('../../assets/image/nav.jpg')}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%', 
    borderColor: 'white',  
    alignItems: 'center', 
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
  button: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  inputBoxText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 2,
    fontSize: 20, 
  },
  hoşgeldinizText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 50, // Added marginBottom to control the distance
    fontSize: 30, 
  },
  kayıtOlButton: {
    borderWidth: 1,
    width: '40%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  }
});
