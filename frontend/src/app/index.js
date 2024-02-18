import { Text, Touchable, View, StyleSheet } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import Login from "../components/login/LoginPage";
import styles from "../styles/styles";
import { SearchBar } from "@rneui/themed"
import { useState, useEffect } from "react";
import Explore from "../components/Explore/Explore"
import { Button } from "@rneui/base";
import PreviewCard from "../components/cards/PreviewCard";

const Home = () => {
    const router = useRouter();

    // to be passed from page to preview card
    const mockPathTile = {
        id: 123,
        title: "Foundations of Financial Literacy",
        description: "Description of learning some finance bullshit idk",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 75 // this will be stored in the user object
    };

    return (
        <View style={styles.container}>

            <View style={styles.main}>

                <Explore>

                </Explore>
                <PreviewCard preview={mockPathTile}></PreviewCard>
            </View>
        </View>
    );
}

export default Home;