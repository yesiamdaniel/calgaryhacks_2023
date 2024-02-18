import { Stack } from "expo-router"
import { SafeAreaView } from "react-native"
import { StyleSheet } from "react-native"

export default layout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',

    }
})