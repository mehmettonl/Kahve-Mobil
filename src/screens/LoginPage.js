import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';
import Loading from '../components/Loading';
import SignupPage from './SignupPage';
import AnaSayfa from './AnaSayfa';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [şifre, setŞifre] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  const handleLogin = () => {
    setIsLoading(true);
  };

  const handleSignup = () => {
    
  };

  return (
    <View style={styles.container}>
      
      
      <Text style={styles.headerText}>Hoşgeldiniz {email}</Text>
      <Text style={styles.whiteText}>Email</Text>
      <TextInput
        imputMode='email'
        placeholder='Email adresinizi giriniz'
        style={styles.textInputStyle}
        onChangeText={setEmail}
      />

      <Text style={styles.whiteText}>Şifre</Text>
      <TextInput
        secureTextEntry={true}
        placeholder='Şifrenizi giriniz'
        style={styles.textInputStyle}
        onChangeText={setŞifre}
      />

      <Pressable
        onPress={handleLogin}
        style={({pressed}) => [{
          backgroundColor: pressed ? 'gray' : '#7fff00'
        }, styles.button]}
      >
        <Text style={styles.buttonText}>Giriş</Text>
      </Pressable>

      <Pressable
        onPress={handleSignup}
        style={({pressed}) => [{
          backgroundColor: pressed ? 'gray' : '#7fff00',
          marginTop:15,
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
  textInputStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
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
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf:'flex-start',
    marginBottom: 5,
    fontSize: 20, 
  },
  kayıtOlButton:{
    borderWidth: 1,
    width: '40%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,

  }
});
