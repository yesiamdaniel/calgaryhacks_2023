import { useRouter } from "expo-router";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { store, persistor } from "../redux/state/store";
import PageContainer from "./PageContainer";
import ModulePreviewCard from "../components/cards/ModulePreviewCard";

const Root = () => {
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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PageContainer></PageContainer>
            </PersistGate>
        </Provider>
    );

}

export default Root;