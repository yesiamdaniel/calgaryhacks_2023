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
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 'auto',
        color: 'white',
    },
    card: {
        height: 'fit-content',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    cardText: {
        color: 'white',
    },
    cardTextTitle: {
        fontWeight: 'bold',
        color: 'white'
    },
    cardTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 150,
        padding: 10,
        // backgroundColor: 'red'
    },
    cardTextTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTextMidRow: {
        flexDirection: 'col'
    },
    cardTextBotRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});

export default styles;