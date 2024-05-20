import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AnaSayfa = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <Text style={styles.description}>Bu, ana sayfa açıklama metnidir. Uygulamanızın ana özelliklerini burada tanıtabilirsiniz.</Text>
      <Button
        title="Devam Et"
        onPress={() => navigation.navigate('DetaySayfa')}
      />
    </View>
  );
};

const DetaySayfa = () => {
  return (
    <View style={styles.container}>
      <Text>Detay Sayfası</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnaSayfa">
        <Stack.Screen name="AnaSayfa" component={AnaSayfa} />
        <Stack.Screen name="DetaySayfa" component={DetaySayfa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});
