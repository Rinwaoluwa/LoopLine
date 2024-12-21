import { View } from "react-native";
import LottieView from 'lottie-react-native';
import { styles } from "./styles";
import emptyState from "../../../assets/animations/empty-state.json";

export function EmptyState() {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                loop
                source={emptyState}
                style={styles.lottieImage}
            />
        </View>
    )
}