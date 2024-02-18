import { Text, Touchable, View, StyleSheet } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import styles from "../styles/styles";
import Explore from "../components/Explore/Explore"
import PreviewCard from "../components/cards/PreviewCard";
import Market from "../components/pages/Market";
import { en, registerTranslation } from "react-native-paper-dates"

const Home = () => {
    const router = useRouter();

    registerTranslation('en', en);
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

                <Market></Market>
            </View>
        </View>
    );
}

export default Home;