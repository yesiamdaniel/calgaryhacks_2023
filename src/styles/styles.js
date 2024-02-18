import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/themes";

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
    },
    cardText: {
        fontFamily: FONTS.DMRegular,
        color: COLORS.white[50],
        fontSize: SIZES.s
    },
    cardTextMoney: {
        color: COLORS.green[600],
        fontFamily: FONTS.DMBold,
        fontSize: SIZES.m
    },
    cardTextTitle: {
        fontFamily: FONTS.DMBold,
        color: COLORS.white[50],
        fontSize: SIZES.ms
    },
    moduleCardTextTitle: {

    },
    cardContainer: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        padding: SIZES.s,
        borderRadius: SIZES.s,
        width: '100%',
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
    pathCardTextContainer: {
        height: 350,
        padding: 10,
        borderRadius: 10,
        width: 'auto',
    },
    pathCardWrapper: {
        justifyContent: 'center',
        height: 300,
        flow: 2
    },
    cardTextTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTextMidRow: {
        flexDirection: 'col',
        justifyContent: 'center',
    },
    pathCardTextMidRow: {
        flexDirection: 'col',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
        flex: 8,
    },
    cardTextBotRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    pathCardTextBotRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 55,
        flex: 1,
        alignItems: 'flex-start',
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
        width: 250,
        borderRadius: 10,
        flex: 1
    },

    input: {
        color: "#38434D"
    },

    /**
     * =============================
     * Progression Page
     * =============================
     */

    progressionPage: {
        margin: 30,
        alignItems: 'center',
    },
    progressBarTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    progressContainer: {
        flexDirection: 'column',
        margin: 5,
        height: 50,
    },
    progressBarTextLeftContainer: {
        flexDirection: 'row',
    },
    progressBarTextScore: {
        color: '#676767',
    },
    progressPageTitle: {
        fontFamily: FONTS.DMBold,
        fontSize: 40,
        marginBottom: 60,
    },
    progressBarTextTitle: {
        fontFamily: FONTS.DMMedium,
    },

    /**
     * =============================
     * Home Page
     * =============================
     */
    homePage: {
        height: 660,
        width: '100%'
    },
    homeContainer: {
        height: 660,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    homePickUpContainer: {
        height: 250,
    },
    homePickUpTitle: {
        fontSize: 26,
        marginBottom: 10,
        marginLeft: 15,
        fontFamily: FONTS.DMMedium
    },
    homePageTitle: {
        fontFamily: FONTS.DMBold,
        fontSize: 40,
        marginBottom: 60,
        marginLeft: 15,
        marginTop: 30
    },
    homePickUpProgressContainer: {
        height: 'auto',
        margin: 10,
        borderRadius: 10,
        objectFit: 'contain',
        maxWidth: '100%',
        resizeMode: 'cover'
    },
    homePickUpImageContainer: {
        height: 'auto',
        margin: 10,
        borderRadius: 10,
        objectFit: 'contain',
        maxWidth: '100%',
        resizeMode: 'cover'
    },
    homePickUpImage: {
        height: 250,
        margin: 10,
        borderRadius: 10,
        width: 'auto',
        maxWidth: '100%',
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    homeProgressImage: {
        height: 90,
        margin: 10,
        borderRadius: 10,
        maxWidth: '100%',
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    homeProgressContainer: {
        height: 300,
        borderRadius: 10,
        height: 'auto',
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    homePortfolioContainer: {
        height: 300,
        borderRadius: 10,
        marginTop: 25,
        height: 'auto',
        overflow: 'hidden',
        resizeMode: 'cover',
    },

    /**
     * =============================
     * Utilities
     * =============================
     */

    progressBar: {
        margin: 5,
        color: COLORS.green[600],
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
    flatListContainer: {
        height: 400,
    },
    navbar: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%", // take full width of the screen
    },
    imageOverlay: (showDetails) => ({
        height: '100%',
        width: '100%',
        position: "absolute",
        backgroundColor: 'black',
        opacity: !showDetails ? 0.1 : 0.5,
        borderRadius: SIZES.s
    })
});

export default styles;