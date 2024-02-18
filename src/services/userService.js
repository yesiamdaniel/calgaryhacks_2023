import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";

const getUserData = async () => {
    try {
        const docRef = doc(db, "users", auth.currentUser.uid);
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

const setUserData = async (userData) => {
    try {
        await setDoc(doc(db, "users", auth.currentUser.uid), userData);
        console.log("Document written with ID: ", userId);
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

export {getUserData, setUserData}