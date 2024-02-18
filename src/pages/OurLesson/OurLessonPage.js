import { Text, ImageBackground,  Touchable, View, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList, Image} from "react-native";
import { SearchBar } from "@rneui/themed"
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import  { initializeApp} from 'firebase/app';
import { useRouter } from "expo-router";
import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc, FieldValue, increment } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../../constants/firebase";
import { desKey } from "../../constants/userKeys";
import {lesson2} from "../../constants/Lessons";
import Lesson from "../../components/lessons/Lesson.js"



const OurLessonPage = () => {


    return (<Lesson info={lesson2}>

    </Lesson>)

 
}


const styles =  StyleSheet.create({
    container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
    },
    header: {
        width: "100%"
    },
    imageNameDate: {
        alignItems:"center"
    },
    userImage: {
        width:150,
        height:150,
        borderRadius:1000,
        marginTop:50,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    h1: {
        fontSize:42,
        color:"#67949ff"
    },
    h2: {
        color:"grey"
    },
    h3: {
        marginLeft:30,
        fontSize:30,
        color:"#6949ff"
    },
    detailsRow: {

        flexDirection:"row",
        borderTopWidth:1,
        borderColor:"grey",
        width:"85%",
        alignSelf:"center",
        marginTop:10
    },
    statsGrid: {

    },
    scrollView : {
        marginHorizontal:0
    },
    SafeAreaView: {
        width: Dimensions.get('window').width
    }
});
export default OurLessonPage;