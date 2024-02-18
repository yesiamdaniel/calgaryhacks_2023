import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config"
import { setUserData } from "./userService"
import userModel from "../models/user/user.model"

export const signup = async (email, password) => {
    try {
        console.log("Auth.signup")
        console.log(email, "", password)
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await emailVerification();
        const user = userCredential.user;
        console.log("User Registered:", user);
        
        // Define the user model inline
        const newUser = {
            name: '', // You might get this from a form input
            createdAt: new Date(), // Use the current date/time as the creation timestamp
            email: user.email, // Use the email from the registered user
            stocks: [], // Initialize with an empty array of stocks
            dollarsEarned: 0 // Initialize earnings as 0
        };

        await setUserData(user.uid, newUser)
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