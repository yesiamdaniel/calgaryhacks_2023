import { StyleSheet } from "react-native";

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
    input: {
        color: "#38434D"
    }, 
    navbar : {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%", // take full width of the screen
    },
});

export default styles;