// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import getFireStore, { getFirestore } from "firebase/firestore"
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
import { ReactNativeAsyncStorage } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBadgw8Y0osObxuc09IL9PB5we97_-v22s",

  authDomain: "calgaryhacks-2024-b431e.firebaseapp.com",

  projectId: "calgaryhacks-2024-b431e",

  storageBucket: "calgaryhacks-2024-b431e.appspot.com",

  messagingSenderId: "82074831606",

  appId: "1:82074831606:web:adc28018c1abebbcce7ad7"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//init auth
initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)})
const auth = getAuth(app);

// // here we read a doc
// const q = query(collection(db, "testjson"));
// const result = await getDocs(q);        // this is an object of all docs that fit the query

// // Here we create a new doc
// const newdoc = await setDoc(doc(db, "collection", "docname"), {"JSON": "Payload"});

// // Here we update an existing doc (similar to set?)
// const upd = await updateDoc(doc(db, "collection", "docname"), {"JSON":"Payload"});

export { db, auth, app };