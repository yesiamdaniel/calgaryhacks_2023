import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config"

export const signup = async (email, password) => {
    try {
        console.log("Auth.signup")
        console.log(email, "", password)
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await emailVerification();
        const user = userCredential.user;
        console.log("User Registered:", user);
        return user;
    } catch (error) {
        console.error("Registration Error: ", error)
    }
    
}

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await emailVerification();
        const user = userCredential.user;
        console.log("Successful Login")
        return user;
    } catch (error) {
        console.error("Login Error: ", error)
    }

}

export const emailVerification = async () => {
    const user = auth.currentUser;

    try {
        await sendEmailVerification(auth.currentUser, {
            handleCodeInApp: true,
            url: "https://calgaryhacks-2024-b431e.firebaseapp.com"
        }).then(() => {
            console.log("Successful Login")
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.error("Email Verification Error:", errorCode, errorMessage);
        throw error;
    }
};