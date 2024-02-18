// import Home from "../pages/Home/Home";
import LessonComplete from "../components/lessons/LessonComplete"
import { ImageBackground,  Touchable, View, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList } from "react-native";
import { SearchBar, Text } from "@rneui/themed"
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import  { initializeApp} from 'firebase/app';
import { useRouter } from "expo-router";
import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc, FieldValue, increment } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../constants/firebase";
import { desKey } from "../constants/userKeys";
import Lesson from "../components/lessons/Lesson";
import { lesson2 } from "../constants/Lessons";


const HomeTab = () => {




  const [path1Data, setPath1Data] = useState(undefined);
  const [module1Data, setModule1Data] = useState(undefined);
  const [lessonsData, setLessonsData] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
 

  const path1_data = () => {
          const q = query(collection(db, "Path1/"), where("id", "==", 0));
          const docs = getDocs(q).then((docs) => {  
          docs.forEach((x) => {
              setPath1Data(x.data());
              
          })             
  });
}

  const module1_data = () => {
      const q = query(collection(db, "Path1/Path1/Module1.1"), where("id", "==", 0));

      const docs = getDocs(q).then((docs) => {  

      docs.forEach((x) => {
              setModule1Data(x.data());
          })             
      });

  }

  const lessons_data = () => {
      const q = query(collection(db, "Path1/Path1/Module1.1"), where("id", ">", 0));

      var arr = [];
      const docs = getDocs(q).then((docs) => {  

      var arr = [];

      docs.forEach((x) => {
              arr.push(x.data());
          })             
      });
      setLessonsData(arr);
  }

  
  


  useEffect(() => {
    /*
      if (path1Data == undefined) {
          path1_data();
      }
      if (module1Data == undefined) {
          module1_data();
      }
      if (lessonsData.length === 0) {
          lessons_data();
      }
      if (lessons_data.length > 0) {

      }
      */
  },[]); 





  return (

       <Lesson info={lesson2}></Lesson>


   

  )
}

export default HomeTab