
import { Text, ImageBackground,  Touchable, View, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList, Image} from "react-native";
import { SearchBar } from "@rneui/themed"
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import  { initializeApp} from 'firebase/app';
import { useRouter } from "expo-router";
import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc, FieldValue, increment } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../../constants/firebase";
import { desKey } from "../../constants/userKeys";
import { logOut } from "../../services/auth";



const Profile = () => {

    const router = useRouter();
    return (
        <SafeAreaView style={styles.SafeAreaView}>

        <ScrollView style={styles.scrollView}>
        <View>

            <View style={styles.container}>
                <View style={styles.header}>

                    <Text style={styles.h3}>
                        Account
                    </Text>

                <View style={styles.imageNameDate}>
                    <Image style = {styles.userImage}
                        source={require("../../assets/images/nickcage.jpg")}
                    >
                    
                    </Image>
                    <Text fontSize={30} style={styles.h1}>
                            Nick Cage
                    </Text>
                    <Text style={styles.h2}>
                        Joined August 1, 2023
                    </Text>
                </View>

                <View style={styles.detailsRow}>
                <Text style={{fontSize:18, width:90, color:"grey", marginLeft:20, justifyContent:"flex-start",textAlign:"center"}}>
                    Modules{"\n"}56
                </Text>
                <Text style={{fontSize:18, width:90, color:"grey", justifyContent:"flex-start", textAlign:"center"}}>
                    Paths{"\n"}14
                </Text>
                <Text style={{fontSize:18, width:90, color:"grey", justifyContent:"flex-start", textAlign:"center"}}>
                    Lessons{"\n"}124
                </Text>
         
                </View>
                <Text style={{fontSize:24, alignSelf:"center", marginTop:40, color:"#6949ff"}}>
                    Statistics
                </Text>
                <View style={styles.statsGrid}>


                </View>
                <Button title="Logout" onPress={() => {
                    logOut();
                    router.navigate("landing/Login")
                }} style={{alignSelf:"stretch"}}></Button>
                </View>
            </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    )


 
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
        color:"#6949ff"
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
export default Profile