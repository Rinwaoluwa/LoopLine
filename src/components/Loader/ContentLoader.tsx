import LottieView from "lottie-react-native";
import { View } from "react-native";
import contentLoader from "../../../assets/animations/content-loader.json";
import { styles } from "./styles";

export function ContentLoader() {
    return (
        <View style={styles.contentContainer}>
            <LottieView
                autoPlay
                loop
                source={contentLoader}
                style={styles.lottieImage}
            />
        </View>
    )
}