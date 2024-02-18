import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@rneui/base";
import PreviewCard from "../components/cards/PreviewCard";
import styles from "../styles/styles";

const Home = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
                <PreviewCard></PreviewCard>
            </View>
        </View>
    );
}

export default Home;