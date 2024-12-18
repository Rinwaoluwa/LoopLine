import { StyleSheet } from "react-native";
import { palette } from "../../config/palette";
import { heightPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: palette['grey--2'],
        height: heightPixel(1),
    }
})