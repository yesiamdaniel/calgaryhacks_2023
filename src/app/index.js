import { Redirect } from "expo-router";
import { en, registerTranslation } from "react-native-paper-dates";
import { useState } from "react";

const Entry = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    registerTranslation('en', en)
    return (
        <>
            {loggedIn === true ? (
                <Redirect href='(tabs)/Home' />
            ) : (
                <Redirect href='landing/Login' />
            )}  
        </>
    );

}

export default Entry;