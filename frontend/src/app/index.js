import { Text, Touchable, View } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import Login from "../components/login/LoginPage";
import styles from "../styles/styles";

const Home = () => {
    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <View style={styles.main}>
            </View>
        </View>
    );
    
}

export default Home;