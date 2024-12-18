import { StyleSheet } from "react-native";
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../../config/normalise";
import { palette } from "../../config/palette";

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    flex: {
        flex: 1,
    },
    imageContainer: {
        height: heightPixel(200),
        alignItems: "flex-end",
    },
    image: {
        width: '100%',
        borderRadius: normalise(16),
    },
    categoryPill: {
        backgroundColor: palette['grey--2'],
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
        margin: normalise(18)
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bodyText: {
        lineHeight: normalise(24),
    }
})