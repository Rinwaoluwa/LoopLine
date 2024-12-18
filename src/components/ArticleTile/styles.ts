import { StyleSheet } from "react-native";
import { palette } from "../../config/palette";
import { heightPixel, normalise, widthPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: palette.white,
      gap: widthPixel(12),
    },
    image: {
      width: widthPixel(100),
      height: heightPixel(100),
      borderRadius: 12,
    },
    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    content: {
      flex: 1,
    },
    categoryPill: {
        backgroundColor: palette['grey--2'],
        padding: normalise(6),
        borderRadius: normalise(6),
        height: heightPixel(32),
    },
  });
  