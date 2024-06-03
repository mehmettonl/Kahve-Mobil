import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';

const Stack = createNativeStackNavigator();

const AnaSayfa = () => {
  const [data, setData] = useState([]);

  console.log("data: ", data);

  // send data to Firebase
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        first: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 95
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // get data from Firebase
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      setData(dataList);
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  }

  // delete data from Firebase
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", id));
      console.log("Document deleted with ID: ", id);
      setData(data.filter(item => item.id !== id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.first}</Text>
          <Text>{item.content}</Text>
          <Text>{item.lesson}</Text>
          <CustomButton
            buttonText={"Delete"}
            setWidth={"40%"}
            buttonColor={'red'}
            pressedButtonColor={'gray'}
            handleOnPress={() => deleteData(item.id)}
          />
        </View>
      ))}

      <CustomButton
        buttonText={"Save"}
        setWidth={"40%"}
        buttonColor={'blue'}
        pressedButtonColor={'gray'}
        handleOnPress={sendData}
      />
      <CustomButton
        buttonText={"Get Data"}
        setWidth={"40%"}
        buttonColor={'blue'}
        pressedButtonColor={'gray'}
        handleOnPress={getData}
      />
    </View>
  );
}

export default AnaSayfa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  }
});
