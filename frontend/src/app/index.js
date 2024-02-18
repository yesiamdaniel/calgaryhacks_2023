import { Text, Touchable, View, StyleSheet } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import { en, registerTranslation } from "react-native-paper-dates"

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { store, persistor } from "../redux/state/store";
import PageContainer from "./PageContainer";
import ModulePreviewCard from "../components/cards/ModulePreviewCard";

const Root = () => {
    const router = useRouter();
    registerTranslation('en', en);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PageContainer></PageContainer>
            </PersistGate>
        </Provider>
    );

}

export default Root;