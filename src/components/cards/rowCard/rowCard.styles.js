import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/themes";

export default styles = StyleSheet.create({
    container: (color) => ({
        width: 'auto',
        marginHorizontal: SIZES.s,
        marginVertical: SIZES.xxs,
        height: 80,
        backgroundColor: color,
        borderRadius: SIZES.s,
        textAlign: 'center',
    }),
    text: {
        marginVertical: 'auto',
        textAlign: 'center',
        fontFamily: FONTS.DMRegular,
        fontSize: SIZES.ms
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginLeft: SIZES.ms,
        gap: 16,
        alignItems: 'center',
    },
    image: {
        height: 52,
        width: 52,
        backgroundColor: COLORS.plum[900],
        borderRadius: SIZES.m
    }
});