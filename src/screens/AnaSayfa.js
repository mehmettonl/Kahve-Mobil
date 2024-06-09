import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';

const Stack = createNativeStackNavigator();

const AnaSayfa = () => {
  const [data, setData] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [productType, setProductType] = useState('');
  const [productName, setProductName] = useState('');
  const [productSize, setProductSize] = useState('');

  console.log("data: ", data);

  // Firebase'e sipariş gönder
  const sendOrder = async () => {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        customerName,
        productType,
        productName,
        productSize
      });
      console.log("Belge yazıldı: ", docRef.id);
      Alert.alert("Başarılı", "Siparişiniz başarıyla oluşturuldu");
    } catch (e) {
      console.error("Belge eklenirken hata oluştu: ", e);
    }
  }

  // Firebase'den siparişleri al
  const getOrders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      setData(dataList);
    } catch (e) {
      console.error("Belgeler alınırken hata oluştu: ", e);
    }
  }

  // Firebase'den siparişi sil
  const deleteOrder = async (id) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      console.log("Belge silindi: ", id);
      setData(data.filter(item => item.id !== id));
    } catch (e) {
      console.error("Belge silinirken hata oluştu: ", e);
    }
  }

  // Firebase'de siparişi güncelle
  const updateOrder = async (id) => {
    try {
      const orderRef = doc(db, "orders", id);

      // Siparişi güncelle
      await updateDoc(orderRef, {
        productSize: "Medium"
      });

      console.log("Belge güncellendi: ", orderRef.id);
    } catch (error) {
      console.error("Belge güncellenirken hata oluştu: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sipariş Ekranı</Text>
      <TextInput
        style={styles.input}
        placeholder="Müşteri Adı"
        value={customerName}
        onChangeText={setCustomerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ürün Türü (Kahve/Tatlı)"
        value={productType}
        onChangeText={setProductType}
      />
      <TextInput
        style={styles.input}
        placeholder="Ürün Adı"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ürün Boyutu (Büyük/Orta/Küçük)"
        value={productSize}
        onChangeText={setProductSize}
      />
      <CustomButton
        buttonText={"Sipariş Ver"}
        setWidth={"40%"}
        buttonColor={'#7fff00'}
        pressedButtonColor={'gray'}
        handleOnPress={sendOrder}
      />
      <CustomButton
        buttonText={"İptal Et"}
        setWidth={"40%"}
        buttonColor={'#7fff00'}
        pressedButtonColor={'gray'}
        handleOnPress={getOrders}
      />

      {data.map((item, index) => (
        <View key={index} style={styles.orderItem}>
          <Text>Müşteri Adı: {item.customerName}</Text>
          <Text>Ürün Türü: {item.productType}</Text>
          <Text>Ürün Adı: {item.productName}</Text>
          <Text>Ürün Boyutu: {item.productSize}</Text>
          <CustomButton
            buttonText={"Sil"}
            setWidth={"40%"}
            buttonColor={'#7fff00'}
            pressedButtonColor={'gray'}
            handleOnPress={() => deleteOrder(item.id)}
          />
          <CustomButton
            buttonText={"Güncelle"}
            setWidth={"40%"}
            buttonColor={'#7fff00'}
            pressedButtonColor={'gray'}
            handleOnPress={() => updateOrder(item.id)}
          />
        </View>
      ))}
    </View>
  );
}

export default AnaSayfa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'white'
  },
  orderItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center'
  }
});
