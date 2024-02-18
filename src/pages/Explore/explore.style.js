import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constants/themes";

export default styles = StyleSheet.create({
    horizontalList: {
        width: '100%',
        gap: 16
    },
    mainContainer: {
        flex: 1,
        paddingBottom: 100,
    },
    container: {
        margin: SIZES.xxs,
        width: 'auto',
    },
    horizontalCardContainer: {
        width: 380,
        marginHorizontal: -10
    },
    verticalCardContainer: {
        width: 'auto',
        marginHorizontal: SIZES.xss,
    },
    verticalCardListContainer: {
        paddingBottom: 120
    },
    heading: {
        marginTop: SIZES.xs,
        marginLeft: SIZES.xs,
        fontFamily: FONTS.DMBold,
        fontSize: SIZES.m,
    }
})