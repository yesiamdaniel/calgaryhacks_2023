import { Tabs } from 'expo-router';
import { useRouter } from "expo-router";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { registerRootComponent } from 'expo';
import { store, persistor } from "../../redux/state/store";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";


const _layout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Tabs screenOptions={{
                        headerShown: false,
                        tabBarStyle: { ...styles.tabBar },
                    }}>
                        <Tabs.Screen
                            name="Home"
                            options={{
                                tabBarLabel: "Home",
                            }}
                        />
                        <Tabs.Screen
                            name="Explore"
                            options={{
                                tabBarLabel: "Explore",
                            }}
                        />
                    </Tabs>

                </PersistGate>
            </Provider>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',

    },
    tabBar: {
        position: 'absolute',
        bottom: 8,
        borderRadius: 16,
        left: 20,
        right: 20,
        height: 90,
        elevation: 0,
        alignItems: 'center',
        shadowColor: '#fffff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
})

export default _layout

