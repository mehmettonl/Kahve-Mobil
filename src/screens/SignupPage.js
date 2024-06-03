import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../components/";
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";

const SignupPage = ({ navigation }) => { // navigation nesnesini parametre olarak al
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder={"Enter Your Name"}
        />
        <CustomTextInput
          title="Email"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceholder={"Enter Your Email"}
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceholder={"Create Your Password"}
        />
      </View>

      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText="Sign Up"
          setWidth="80%"
          buttonColor="#7fff00"
          pressedButtonColor="gray"
          borderColor="#7fff00"
          handleOnPress={() => console.log(name, " ", email, " ", password)}
        />

        <Pressable onPress={() => navigation.navigate("Login")}>
    
          <Text style={styles.alreadyText}>Already have an account? Login</Text>
    
        </Pressable>
    
      </View>
    
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  signUp: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "white",
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  signUpOptions: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 220
  },
  alreadyText: {
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'white',
    marginTop: 90, // Metnin üst kısmında boşluk bırakır
    fontSize:18
  },
});
