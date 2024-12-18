import { StyleSheet } from "react-native";
import { palette } from "../../config/palette";
import { normalise, pixelSizeHorizontal, pixelSizeVertical } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: palette['white'],
        paddingTop: pixelSizeHorizontal(60),
        paddingBottom: pixelSizeHorizontal(10),
        paddingHorizontal: pixelSizeVertical(20)
    },
    flex: {
        flex: 1,
    }
});