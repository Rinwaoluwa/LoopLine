import { StyleSheet } from "react-native";
import { heightPixel, normalise, pixelSizeHorizontal, widthPixel } from "../../config/normalise";
import { palette } from "../../config/palette";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: heightPixel(4),
        marginHorizontal: widthPixel(16),
        alignItems: 'flex-end',
    },
    sentContainer: {
        justifyContent: 'flex-start',
    },
    receivedContainer: {
        justifyContent: 'flex-end',
    },
    bubble: {
        maxWidth: '70%',
        paddingHorizontal: widthPixel(12),
        paddingVertical: heightPixel(8),
        borderRadius: normalise(16),
    },
    receivedBubble: {
        backgroundColor: palette['grey--2'],
        borderTopLeftRadius: normalise(4),
        marginLeft: widthPixel(8),
    },
    sentBubble: {
        backgroundColor: palette['grey--2'],
    },
    messageText: {
        lineHeight: heightPixel(20),
    },
    avatar: {
        width: widthPixel(28),
        height: widthPixel(28),
        borderRadius: widthPixel(14),
        marginRight: pixelSizeHorizontal(8),
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
});