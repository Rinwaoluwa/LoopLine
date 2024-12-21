import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    contentContainer: {
        height: heightPixel(300),
        width: widthPixel(300),
        justifyContent: "center",
        alignItems: "center",
    },
    lottieImage: {
        width: '100%',
        height: '100%',
    },
    listLoaderContainer: {

        width: '100%',
        height: '100%',
    }

});