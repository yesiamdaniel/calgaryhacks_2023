import { Redirect } from "expo-router";
import { useFonts } from 'expo-font';
import { useCallback } from "react";

import { en, registerTranslation } from "react-native-paper-dates";
import { useState } from "react";

const Entry = () => {
    const loggedIn = true;

    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    registerTranslation('en', en);
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <>
            {loggedIn === false ? (
                <Redirect onLayoutRootView={onLayoutRootView} href='(tabs)/Home' />
            ) : (
                <Redirect href='landing/Login' />
            )}
        </>
    );

}

export default Entry;