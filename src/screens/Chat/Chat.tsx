import { Pressable, ScrollView, View } from "react-native";
import { Box } from "../../components/Box/Box";
import { styles } from "./styles";
import Icon from "../../../assets/svgs/icon";
import { AppText } from "../../components/AppText/AppText";
import { Spacing } from "../../components/Spacing/spacing";
import { useForm } from "react-hook-form";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import { palette } from "../../config/palette";
import { ChatBubble } from "../../components/ChatBubble/ChatBubble";
import { useChatLogic } from "../../../utils/useChatResponse";
import LottieView from "lottie-react-native";
import typingLoader from '../../../assets/animations/typing-loading-animation.json';


export function Chat({ navigation }: any) {
    const {
        messages,
        setInputMessage,
        isTyping,
        handleSendMessage
    } = useChatLogic();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            message: "",
        },
        mode: "onSubmit",
    });

    const onSubmit = (data: { message: string }) => {
        if (data.message.trim()) {
            setInputMessage(data.message.trim());
            handleSendMessage(data.message.trim());
            
            const now = new Date();
            const timestamp = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });

            // Reset the form after sending
            reset({ message: "" });
        }
    };


    return (
        <Box>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name="back" />
                </Pressable>
                <AppText fontFamily="OpenSans-Medium" color="black">Bot</AppText>
                {/* Empty view to center username */}
                <View></View>
            </View>
            <Spacing height={21} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.flex}
                ref={(ref) => {
                    if (ref) {
                        ref.scrollToEnd({ animated: true });
                    }
                }}
            >
                {messages.map((message) => (
                    <ChatBubble
                        key={message.id}
                        message={{
                            isSent: message.sender === 'bot',
                            id: message.id.toString(),
                            text: message.text,
                            timestamp: new Date().toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            }),
                            isTyping: message.sender === 'bot' && isTyping
                        }}
                    />
                ))}
                {isTyping && (
                    <View style={styles.receivedBubble}>
                        <View style={styles.lottieContainer}>
                            <LottieView autoPlay loop source={typingLoader} style={styles.lottieImage} />
                        </View>
                    </View>
                )}
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
                <Pressable onPress={handleSubmit(onSubmit)}>
                    <Icon name="send" color={palette.black} size={32} />
                </Pressable>
            </View>
        </Box>
    )
}