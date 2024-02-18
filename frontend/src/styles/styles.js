import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        width: '100%',
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
        borderRadius: 10,
        backgroundColor: 'green',
    },
    cardText: {
        color: 'white',
    },
    cardTextMoney: {
        color: 'green'
    },
    cardTextTitle: {
        fontWeight: 'bold',
        color: 'white'
    },
    moduleCardTextTitle: {

    },
    cardContainer: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        width: '100%'
    },
    moduleCardContainer: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 'auto',
    },
    cardTextContainer: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 160,
        padding: 10,
        borderRadius: 10,
        width: 'auto'
    },
    moduleCardTextContainer: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 240,
        padding: 10,
        borderRadius: 10,
        width: 'auto'
    },
    cardTextTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTextMidRow: {
        flexDirection: 'col',
        justifyContent: 'center',
    },
    cardTextBotRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    moduleCardTextBotRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 20
    },
    moduleCard: {
        height: 400,
        borderRadius: 10,
        backgroundColor: 'red',
        width: 250,
        borderRadius: 10,
        flex: 1
    },

    input: {
        color: "#38434D"
    },

    /**
     * =============================
     * Utilities
     * =============================
     */

    progressBar: {
        margin: 5,
        color: "green",
        trackColor: "white",
        borderRadius: 10,
        width: '100%',
        flex: 1
    },
    progressBarContainer: {
        paddingRight: 7,
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
    }, 
    navbar : {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%", // take full width of the screen
    },
});

export default styles;