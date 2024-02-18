import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@rneui/base";
import PreviewCard from "../components/cards/PreviewCard";
import styles from "../styles/styles";

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
                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
                <PreviewCard preview={mockPathTile}></PreviewCard>
            </View>
        </View>
    );
}

export default Home;