import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeHorizontal, widthPixel } from "../../config/normalise";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: widthPixel(400),
    },
    lottieImage: {
        left: "-10%",
        width: "100%", 
        height: "80%",
    }
})