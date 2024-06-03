import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHPKIXcoKQ0Kb5oV4nAv9GHvra6sDaGBw",
  authDomain: "test-app-f0c05.firebaseapp.com",
  projectId: "test-app-f0c05",
  storageBucket: "test-app-f0c05.appspot.com",
  messagingSenderId: "1022723943457",
  appId: "1:1022723943457:web:0e6563f99ebc033529c760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;