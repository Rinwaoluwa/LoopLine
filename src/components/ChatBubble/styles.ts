import { StyleSheet } from "react-native";
import { heightPixel, normalise, widthPixel } from "../../config/normalise";
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
    sentBubble: {
        backgroundColor: palette['grey--2'],
        borderTopLeftRadius: normalise(4),
        marginLeft: widthPixel(8),
    },
    receivedBubble: {
        backgroundColor: palette['grey--2'],
    },
    messageText: {
        lineHeight: heightPixel(20),
    },
    avatar: {
        width: widthPixel(28),
        height: widthPixel(28),
        borderRadius: widthPixel(14),
    },
});