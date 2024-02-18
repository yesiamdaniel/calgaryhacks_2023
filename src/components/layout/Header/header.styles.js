import { FONTS, SIZES } from "../../../constants/themes";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    headerText: {
        fontSize: SIZES.m,
        fontFamily: FONTS.DMMedium
    },
    headerTextContainer: {
        margin: SIZES.s
    }
});