import { StyleSheet, Text, View } from "react-native";
import {Button} from "@rneui/base"
import { useRouter } from "expo-router";
import {SearchBar} from "@rneui/themed"
import { useState, useEffect } from "react";
import Explore from "../components/Explore/Explore"
import Accounts from "../components/Accounts/Accounts";
import Lesson from "../components/Lesson/Lesson";

import  { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';
import { firebaseConfig, app, db } from "../constants/firebase";


const Home = () => {
    const router = useRouter();

    const [path1Data, setPath1Data] = useState(undefined);
    const [module1Data, setModule1Data] = useState(undefined);
    const [lessonsData, setLessonsData] = useState([{
        name:""
    }]);
   

    const path1_data = () => {
            const q = query(collection(db, "Path1/"), where("id", "==", 0));
            const docs = getDocs(q).then((docs) => {  
            docs.forEach((x) => {
                setPath1Data(x.data());
                
            })             
    });
}

    const module1_data = () => {
        const q = query(collection(db, "Path1/Path1/Module1.1"), where("id", "==", 0));

        const docs = getDocs(q).then((docs) => {  

        docs.forEach((x) => {
                setModule1Data(x.data());
            })             
        });

    }

    const lessons_data = () => {
        const q = query(collection(db, "Path1/Path1/Module1.1"), where("id", ">", 0));

        const docs = getDocs(q).then((docs) => {  

        const arr = [];

        docs.forEach((x) => {
            if (lessonsData[0].name === "") {
                setLessonsData([x.data()]);
            }
            else {
                setLessonsData(old => [...old, x.data()]);  
            }

            })             
        });
    
    }
    


    useEffect(() => {
        if (path1Data == undefined) {
            path1_data();
        }
        if (module1Data == undefined) {
            module1_data();
        }
        if (lessonsData[0].name === "") {
            lessons_data();
        }
    }, [, lessonsData]); 

    


    return (

        <View style={styles.container}>
        
        <Lesson info={lessonsData[0]}>
            
        </Lesson>

        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});

export default Home;