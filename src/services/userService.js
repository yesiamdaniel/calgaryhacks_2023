import { doc, setDoc } from "firebase/firestore";
import { db } from "./config";

const getUserData = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such document!")
            return null;
        }
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

const setUserData = async (userId, userData) => {
    try {
        await setDoc(doc(db, "users", userId), userData);
        console.log("Document written with ID: ", userId);
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

export {getUserData, setUserData}