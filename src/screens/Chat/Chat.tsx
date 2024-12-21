import { ScrollView, View } from "react-native";
import { Box } from "../../components/Box/Box";
import { styles } from "./styles";
import Icon from "../../../assets/svgs/icon";
import { AppText } from "../../components/AppText/AppText";
import { Spacing } from "../../components/Spacing/spacing";
import { useForm } from "react-hook-form";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import { palette } from "../../config/palette";
import { ChatBubble } from "../../components/ChatBubble/ChatBubble";

export function Chat() {
    const username = "Rinwa";
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            message: "",
        },
        mode: "onSubmit",
    });

    return (
        <Box>
            <View style={styles.container}>
                <Icon name="back" />
                <AppText fontFamily="OpenSans-Medium" color="black">{username}</AppText>
                {/* Empty view to center username */}
                <View></View>
            </View>
            <Spacing height={21} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
                <ChatBubble message={{isSent: false, id: "233454", text: "I'm at the shoot", timestamp: "Jan 23, 2023",}} key={2394} />
                <ChatBubble message={{isSent: true, id: "233454", text: "almost", timestamp: "Jan 23, 2023", avatar: "ssmdns"}} key={235494} />
            </ScrollView>
            <View style={styles.container}>
                <AppTextInput
                    control={control}
                    label="Message"
                    placeholder="Say something..."
                    error={errors.message?.message}
                    name="message"
                    multiline={true}
                />
                <Icon name="send" color={palette.black} size={32} />
            </View>
        </Box>
    )
}