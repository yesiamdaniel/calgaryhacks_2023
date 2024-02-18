import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {Button} from "@rneui/base"
import Searchable from "../components/Searchable/Searchable";
import {SearchBar} from "@rneui/themed"
import { useState, useEffect } from "react";

const Home = () => {
    const router = useRouter();
/*
    return (
        <SearchBar>


        </SearchBar>


    );
    */



    const cards = [
 
        <Button key={0} title="show" id="show">

        </Button>,
        <Button key={1} title="hide" id="hide">

        </Button>

    ];

    const [html, setHTML] = useState([]);
    const [visCards, setVisCards] = useState([]);
    const [searchText, setSearchText] = useState("");


    const refreshVisCards = (text) => {
        var vis = [];
        var compText = text.toLowerCase();

        setSearchText(text);

        for (let i = 0; i < visCards.length; ++i) {

            if (visCards[i].props.id.toLowerCase().includes(compText)) {
                vis.push(visCards[i]);
            }
        }
        setVisCards(vis);

        
    }

    useEffect(() => {
        if (visCards.length === 0) {
            setVisCards(cards);
        }
    }, [,searchText]);

    return (

        
        <View style={styles.container}>
  


            <View style={styles.main}>

            <SearchBar
        placeholder="Search..."
        onChangeText={refreshVisCards}
        value={searchText}
        >
      
        </SearchBar>

                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
               

    
            <View id="Cards">
                {visCards}
            </View>
            <Searchable></Searchable>
            </View>
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