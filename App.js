import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';
import Loading from './components/src/Loading';

export default function App() {
  const [Email, setEmail] = useState("")
  const [şifre, setŞifre] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  console.log(isLoading);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hoşgeldiniz {Email}</Text>
      <Text style={styles.whiteText}>Email</Text>
      <TextInput
        placeholder='Email adresinizi giriniz'
        style={styles.textInputStyle}
        onChangeText={setEmail}
      />

      <Text style={styles.whiteText}>Şifre</Text>
      <TextInput
        secureTextEntry={true} // "TextsecureEntry" yanlış yazılmış, düzeltilmiş hali "secureTextEntry"
        placeholder='Şifrenizi giriniz'
        style={styles.textInputStyle}
        onChangeText={setŞifre}
      />

<Pressable
  onPress={() => setIsLoading(true)}
  style={({pressed}) => [{
    backgroundColor: pressed ? 'gray' : '#7fff00'
  }, styles.button]}
>
  <Text style={styles.buttonText}>Giriş</Text>
</Pressable>


      {isLoading 
      ? <Loading 
      name="ButtonName"
      changeIsLoading={()=> setIsLoading(false)}/> 
      : null }

      <Image
        style={styles.stretch}
        source={require('./assets/image/nav.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // '1' yerine 1 kullanılmalı
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 80,
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
    marginBottom: 5,
    fontSize: 20, // "whiteText" stiline iki farklı font boyutu atanmış, bu nedenle sadece bir tane kullanılmalı
  },
  image: {
    width: 100,
    height: 100,
  }
});
