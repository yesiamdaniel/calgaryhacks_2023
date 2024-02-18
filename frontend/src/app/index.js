import { Text, Touchable, View, StyleSheet } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import Login from "../components/login/LoginPage";
import styles from "../styles/styles";
import { SearchBar } from "@rneui/themed"
import { useState, useEffect } from "react";
import Explore from "../components/Explore/Explore"
import { Button } from "@rneui/base";
import PreviewCard from "../components/cards/PreviewCard";
import ModulePreviewCard from "../components/cards/ModulePreviewCard";

const Home = () => {
    const router = useRouter();

    const image = { uri: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg' };
    // to be passed from page to preview card
    const mockPathTile = {
        id: 123,
        title: "Foundations of Financial Literacy",
        description: "Description of learning some finance bullshit idk",
        cashReward: 1500,
        timeMinutes: 20, // could be a time object
        timeHours: 0,
        progress: 0.75, // this will be stored in the user object
        imageURL: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg' 
    };

    // <View style={{flexDirection: 'row', gap: 20, margin: 10}}>

    return (
        <View style={styles.container}>

            <View style={styles.main}>

                <Explore>

                </Explore>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <ModulePreviewCard preview={mockPathTile} />
                    <ModulePreviewCard preview={mockPathTile} />
                </View>
                <PreviewCard preview={mockPathTile} />
            </View>
        </View>
    );
}

export default Home;