import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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

const updateUserStocks = async (newStock) => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
        stocks: arrayUnion(newStock)
    });
}

const getUserStocks = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    try {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            // Assuming 'stocks' is an array of stock objects in your user document
            const stocks = docSnap.data().stocks;
            console.log("User stocks:", stocks);
            return stocks;
        } else {
            console.log("No such user document!");
            return [];
        }
    } catch (error) {
        console.error("Error getting user stocks:", error);
        return [];
    }
}

export {getUserData, setUserData, updateUserStocks, getUserStocks}