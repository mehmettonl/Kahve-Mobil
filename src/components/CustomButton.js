import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ buttonText, setWidth, handleOnPress, buttonColor, pressedButtonColor}) => {
  return (
    <Pressable
      onPress={()=> handleOnPress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          width:setWidth,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
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
});
