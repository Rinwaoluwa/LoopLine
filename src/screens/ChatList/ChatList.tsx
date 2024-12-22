import { useForm } from "react-hook-form";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import { Box } from "../../components/Box/Box";
import { Spacing } from "../../components/Spacing/spacing";
import { ChatTile } from "../../components/ChatTile/ChatTile";
import { Pressable, View } from "react-native";
import { styles } from "./styles";
import Icon from "../../../assets/svgs/icon";
import { AppText } from "../../components/AppText/AppText";
import { useNavigation } from "@react-navigation/native";

export function ChatList() {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            search: "",
        },
        mode: "onSubmit",
    });

    return (
        <Box>
            <View style={styles.topRow}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name="back" size={32} />
                </Pressable>
                <AppText fontFamily="OpenSans-Bold" style={styles.textStyle} fontSize={20}>Chats</AppText>
                <View />
            </View>
            <AppTextInput
                control={control}
                label="Search"
                placeholder="Search..."
                error={errors.search?.message}
                name="search"
                autoCapitalize="none"
                left="search"
            />
            <Spacing height={20} />
            <ChatTile />
        </Box>
    )
}