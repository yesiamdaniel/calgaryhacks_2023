import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {Button} from "@rneui/base"

import {SearchBar} from "@rneui/themed"
import { useState, useEffect } from "react";
import Explore from "../components/Explore/Explore"

const Home = () => {
    const router = useRouter();

    return (

        <View style={styles.container}>

            <View style={styles.main}>

            <Explore>

            </Explore>


                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
  
                

            </View>
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