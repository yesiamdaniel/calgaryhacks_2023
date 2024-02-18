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
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginLeft: SIZES.ms,
        gap: 16,
        alignItems: 'center',
    },
    imageContainer: {
        // width: 48,
        // height: 48,
        padding: 12,
        backgroundColor: COLORS.white[50],
        alignItems: 'center',
        marginVertical: 'auto',
        borderRadius: 16
    },
    image: {
        height: 24,
        width: 24,
        borderRadius: SIZES.m,
        alignItems: 'center',
    }
});