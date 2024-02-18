import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {Button} from "@rneui/base"
import { SearchBar } from "@rneui/themed";


const Searchable = (props) => {
    const router = useRouter();



    return (
 

        <View>

    


        
            <Text id="div1">
                This is a div to hide

            </Text>

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

export default Searchable;