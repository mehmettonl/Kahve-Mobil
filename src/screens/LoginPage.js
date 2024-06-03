import { 
  StyleSheet,
  Text,
  View,
  Image } from 'react-native';
import React, { useState } from 'react';
import { Loading, CustomTextInput, CustomButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, } from '../../redux/userSlice';
import { login } from '../../redux/userSlice';

const LoginPage = ({}) => {
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  
  const navigation = useNavigation();
  
  // user Slice içindeki verilerin okunması
  const { isLoading } = useSelector((state) => state.user);

  // user Slice içindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();
  
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      
      <CustomTextInput 
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => setEmail(text.toLowerCase())}
        handleValue={email}
        handlePlaceholder='Email adresini giriniz'
      />
      
      <CustomTextInput 
        title="Şifre"
        isSecureText={true}
        handleOnChangeText={(text) => setSifre(text)}
        handleValue={sifre}
        handlePlaceholder='Şifrenizi giriniz'
      />

      <CustomButton
        buttonText="Giriş"
        setWidth="80%"
        handleOnPress={() => dispatch(login({ email, sifre }))}
        buttonColor='#7fff00'
        pressedButtonColor='gray'
      />
      
      <CustomButton
        buttonText="Kayıt Ol"
        setWidth="80%"
        handleOnPress={handleSignup}
        buttonColor='#7fff00'
        pressedButtonColor='gray'
      />
      
      {isLoading ? <Loading 
      changeIsLoading={() => dispatch(setIsLoading(false))} />
        : null }
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
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  hoşgeldinizText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 50, 
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
  },
  welcome:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:40,
    color:'white'
  }
});
