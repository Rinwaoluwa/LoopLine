import { StyleSheet } from "react-native";
import { palette } from "../../config/palette";
import { heightPixel, normalise, widthPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    flex: {
        flex: 1,
    },
    receivedBubble: {
        backgroundColor: palette['grey--2'],
        borderTopLeftRadius: normalise(4),
        marginLeft: widthPixel(60),
        width: '15%',
        paddingHorizontal: widthPixel(12),
        paddingVertical: heightPixel(8),
        borderRadius: normalise(16),
    },
    lottieContainer: {
        width: widthPixel(20),
        height: heightPixel(20),
    },
    lottieImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    }
})