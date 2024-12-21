import { View } from "react-native"
import listLoader from "../../../assets/animations/list-loader.json"
import LottieView from "lottie-react-native"
import { styles } from "./styles"

export function ListLoader() {
    return (
        <View style={styles.listLoaderContainer}>
            <LottieView
                autoPlay
                loop
                source={listLoader}
                style={styles.lottieImage}
            />
        </View>
    )
}