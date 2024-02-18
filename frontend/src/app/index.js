import { StyleSheet, Text, View } from "react-native";
import {Button} from "@rneui/base"
import { useRouter } from "expo-router";
import {SearchBar} from "@rneui/themed"
import { useState, useEffect } from "react";
import Explore from "../components/Explore/Explore"
import Accounts from "../components/Accounts/Accounts";
import Lesson from "../components/Lesson/Lesson";
import LessonComplete from "../components/Lesson/LessonComplete";

import  { increment, FieldValue, getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../constants/firebase";


const Home = () => {
    const router = useRouter();

  
    


    return (

        <View style={styles.container}>
        
     <LessonComplete>

        </LessonComplete>

        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});

export default Home;