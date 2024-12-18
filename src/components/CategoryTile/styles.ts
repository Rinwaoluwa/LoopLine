import { StyleSheet } from "react-native";
import { heightPixel, normalise, widthPixel } from "../../config/normalise";
import { palette } from "../../config/palette";

export const styles = StyleSheet.create({
    container: {
     
    },
    scrollContent: {
      paddingHorizontal: widthPixel(16),
      gap: widthPixel(8),
    },
    categoryButton: {
      paddingHorizontal: widthPixel(16),
      paddingVertical: heightPixel(8),
      borderRadius: normalise(6),
      borderWidth: 1,
      borderColor: palette["grey--2"],
    },
    categoryButtonActive: {
      backgroundColor: palette.black,
    },
  });