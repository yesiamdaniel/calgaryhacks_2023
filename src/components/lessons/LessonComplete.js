import { ImageBackground,  Touchable, View, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList } from "react-native";
import { SearchBar, Text } from "@rneui/themed"
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import  { initializeApp} from 'firebase/app';
import { useRouter } from "expo-router";
import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc, FieldValue, increment } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../../constants/firebase";
import { desKey } from "../../constants/userKeys";
import { Redirect } from "expo-router";



const LessonComplete = (props) => {
    const router = useRouter();

    const routeHome = () => {
        router.push("(tabs)/Learn")
    }
    

    return(     
    <View style={styles.container}>
        <View style={styles.completeHeader}>
            <Text h3Style={styles.headerText} h3>
                {props.result === "failed" ? "TRY AGAIN" : "LESSON COMPLETED!"}
            </Text>
        </View>
        <View style={{height:"40%"}}></View>
        <View>
            {props.result === "failed" ? <View></View> : <View><View style={styles.rewardBoxHeader}>
                <Text h1>
                    REWARDS
                </Text>
     
            </View>
            <View style={styles.rewardBoxBody}>
            <Text h2 style={{color:"green"}}>
                    ${props.info.reward}
                </Text>
            </View></View>}

        </View>

        <Button title="Continue" color="#11bbff"
        style={styles.continueButton}
        radius="15"
        onPress={routeHome}
        >
        </Button>



        </View>)


  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        paddingTop: 24,
        backgroundColor: "#ffffff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems:"center"

    },
    main: {
        flex: 1,
        alignItems:"center",
        marginTop:"10px",
        maxWidth: 960,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    completeHeader: {
        backgroundColor:"#8addfa",
        borderRadius:25,
        width:"90%"
    },
    headerText: {
        textAlign:"center",
    },
    rewardBoxHeader: {
        borderColor:"black",
        backgroundColor:"#11bbff",
        borderWidth:2
    },
    rewardBoxBody: {
        borderColor:"black",
        borderWidth:2,
        height:100,
        justifyContent:"center",
        borderTopWidth:0
    },
    continueButton: {
        marginTop:20,
        width:250,
        radius:10
    }

});


export default LessonComplete;