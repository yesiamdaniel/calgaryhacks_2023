import { StyleSheet, View, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import {Button, Text, Avatar} from "@rneui/base"



import {SearchBar, Icon} from "@rneui/themed"
import { useState, useEffect } from "react";


const Accounts = () => {
    const router = useRouter();

    return (

        <View style={styles.container}>
            <View style={styles.topBar}>
            <Avatar id="icon" source={{uri: "../../assets/fox_logo.jpg"}}>
                    </Avatar>
                    <Text h2Style={styles.header} h2>
                            Account
                        </Text>
                        <Avatar id="airplane"source={{uri: "../../assets/fox_logo.jpg"}}>

                    </Avatar>
                    <Avatar id="gear" source={{uri: "../../assets/fox_logo.jpg"}}>
                     </Avatar>
            </View>

            <View style={styles.main}>
                <View id="userAvatarView">
                <Avatar size="xlarge" id="userAvatar" source={{uri: "../../assets/fox_logo.jpg"}}>
                    </Avatar>
                </View>
                <Text h3Style={styles.userName} h3>
                    FirstName LastName
                </Text>
                <Text h4Style={styles.joinedText} h4>
                    Joined Jan 1, 1900-01-01
                </Text>

            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        paddingTop: 24,
        backgroundColor: "#181a20",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    },
    main: {
        flex: 1,
        alignItems:"center",
        marginTop:"0px",
        maxWidth: 960,
        backgroundColor: "#181a20",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    header: {
        color:"white",
        marginLeft:"auto",
        alignSelf:"flex-start",
        flex:1
        
        
    },
    topBar: {
        backgroundColor:"#181a20",
        flexDirection:"row",
        width: "100%",
        height:"15%"
    },
    topLeftIcon: {
        flex:1,
        alignSelf:"flex-start"
    },
    userPanelStyle: {
        backgroundColor:"#181a2f",
        flexDirection:"row",
        width: "100%",
        height:"15%"
    },
    userName : {
        color:"white",
        paddingBottom:0
    },
    joinedText : {
        color:"grey",
        flex:1,
        paddingTop:0
    }
});

export default Accounts;