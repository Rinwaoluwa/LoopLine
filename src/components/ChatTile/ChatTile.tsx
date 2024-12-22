import React from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import { AppText } from "../AppText/AppText";
import { ChatTileProps, Message } from "./types";
import { Spacing } from "../Spacing/spacing";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../config/store/hooks";
import { RootState } from "../../config/store/store";
import { getMessagePreview } from "../../../utils/helpers";



export function ChatTile({ avatar, username }: ChatTileProps) {
    const navigation = useNavigation();
    const lastMessage: Message | any = useAppSelector((state: RootState) => state.chat.lastMessage);
    return (
        <Pressable onPress={() => navigation.navigate("chat")}>
            <View style={styles.container}>
                <Image source={require("../../../assets/friend.jpg")} style={styles.imageStyle} />
                <View>
                    <AppText fontFamily="OpenSans-Medium" color="black">Bot</AppText>
                    <AppText
                        fontFamily="OpenSans-Regular"
                        color="grey"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {lastMessage?.sender === "user" ? "you" : lastMessage?.sender}: {getMessagePreview(lastMessage.text)} | {lastMessage.timestamp}
                    </AppText>
                </View>
            </View>
            <Spacing height={24} />
        </Pressable>
    )
}