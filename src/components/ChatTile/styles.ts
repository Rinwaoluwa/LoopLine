import { StyleSheet } from "react-native";
import { heightPixel, normalise, widthPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: normalise(21),
    },
    imageStyle: {
        height: heightPixel(56),
        width: widthPixel(56),
        borderRadius: normalise(28),
    }
});