import { StyleSheet } from "react-native"
import { SIZES, COLORS, FONTS } from "../../../constants/themes";

export default styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.xxs,
    height: 50,
    marginHorizontal: SIZES.xs
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white[400],
    marginRight: SIZES.xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.m,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONTS.DMRegular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.m,
    color: COLORS.green[700],
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.green[600],
    borderRadius: SIZES.m,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white[50],
  },
});
