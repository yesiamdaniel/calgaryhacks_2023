import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {Button} from "@rneui/base"
import Searchable from "../components/Searchable/Searchable";
import {SearchBar} from "@rneui/themed"
import { useState, useEffect } from "react";

const Home = () => {
    const router = useRouter();

    const cards = [
 
        <Button key={0} title="show" id="show">

        </Button>,
        <Button key={1} title="hide" id="hide">

        </Button>

    ];

    const [html, setHTML] = useState([]);
    const [visCards, setVisCards] = useState([]);
    const [searchText, setSearchText] = useState("");


    const updateText = (text) => {
        setSearchText(text);
        refreshVisCards(searchText);
    }

    const refreshVisCards = (text) => {
        var vis = [];
        var compText = text.toLowerCase();


        for (let i = 0; i < cards.length; ++i) {

            if (cards[i].props.id.toLowerCase().includes(compText.toLowerCase())) {
                vis.push(cards[i]);
            }
        }
        setVisCards(vis);        
    }

    useEffect(() => {
        if (visCards.length === 0) {
            setVisCards(cards);
        }

    }, [, visCards]);

    return (

        <View style={styles.container}>
            <View style={styles.main}>

            <SearchBar
        placeholder="Search..."
        onChangeText={updateText}
        value={searchText}>
      
        </SearchBar>

                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
                
            <View>
                {visCards}
            </View>
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