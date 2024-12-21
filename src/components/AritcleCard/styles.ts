import { StyleSheet } from "react-native";
import { palette } from "../../config/palette";
import { heightPixel, normalise, widthPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
        width: widthPixel(289),
    },
    imageContainer: {
        height: heightPixel(200),
    },
    image: {
        width: '100%',
        borderRadius: normalise(16),
    },
    topRow: {
        padding: normalise(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    categoryPill: {
        backgroundColor: palette['blur-transparent'],
        padding: normalise(6),
        borderRadius: normalise(6),
        height: heightPixel(32),
    },
    bookmarkButton: {
        backgroundColor: palette['blur-transparent'],
        width: widthPixel(32),
        height: heightPixel(32),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: normalise(6),
    },
    content: {
        padding: normalise(16),
    },
    footer: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    byLine: {
        flex: 1,
    },
    date: {
        flexShrink: 0
    },
    statsContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
});