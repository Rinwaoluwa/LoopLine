import { StyleSheet } from "react-native";
import { pixelSizeVertical } from "../../config/normalise";

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: pixelSizeVertical(12),
    }
})