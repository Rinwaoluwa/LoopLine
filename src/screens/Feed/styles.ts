import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeVertical } from "../../config/normalise";

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: pixelSizeVertical(12),
    },
    recommedationsContainer: {
        height: heightPixel(330),
    },
    textStyle: {
        textAlign: "center"
    }
})