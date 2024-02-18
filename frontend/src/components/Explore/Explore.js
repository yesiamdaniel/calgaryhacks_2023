import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {Button} from "@rneui/base"

import {SearchBar} from "@rneui/themed"
import { useState, useEffect } from "react";

const Explore = () => {
    const router = useRouter();

    const cards = [
        <Button title="template" id="template" key={1}></Button>
    ];

    const [visCards, setVisCards] = useState(undefined);       // list of cards we want to render
    const [searchText, setSearchText] = useState("");   // last search test
    const [initFlag, setInitFlag] = useState(false);


    const updateText = (text) => {      // set state for latest search text, get cards to render
        setSearchText(text);
        refreshVisCards(text);
    }

    const refreshVisCards = (text) => {     // get list of cards we want t render based on text
        var vis = [];
        var compText = text.toLowerCase();

        if (text) {
            for (let i = 0; i < cards.length; ++i) {  // otherwise  get list of cards we want t render based on text

                if (cards[i].props.id.toLowerCase().includes(compText.toLowerCase()) || compText === "") {
                
                    vis.push(cards[i]);
                }
            }
        }
        else {
            vis = cards;
        }
        setVisCards(vis);         
    }



    useEffect(() => {
        if (!initFlag) {
            setInitFlag(true);
            setVisCards(cards);
        }

    }, [, visCards]);




    return (
       // <View style={styles.container}>
            <View style={styles.main}>

            <SearchBar
        placeholder="Search..."
        onChangeText={updateText}
        value={searchText}>
      
        </SearchBar>

            <View>
                {visCards}
            </View>
            </View>
      //  </View>
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

export default Explore;