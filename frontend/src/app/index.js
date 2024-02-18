import { Text, Touchable, View } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import Login from "../components/login/LoginPage";
import styles from "../styles/styles";

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

export default Home;