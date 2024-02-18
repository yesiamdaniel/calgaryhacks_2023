import { useRouter } from "expo-router";
import  { initializeApp} from 'firebase/app';
import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBadgw8Y0osObxuc09IL9PB5we97_-v22s",
    authDomain: "calgaryhacks-2024-b431e.firebaseapp.com",
    projectId: "calgaryhacks-2024-b431e",
    storageBucket: "calgaryhacks-2024-b431e.appspot.com",
    messagingSenderId: "82074831606",
    appId: "1:82074831606:web:adc28018c1abebbcce7ad7"
  };
  
  // init the app connection
  export const app = initializeApp(firebaseConfig);
  
  // get the default db
  export const db = getFirestore(app);
  