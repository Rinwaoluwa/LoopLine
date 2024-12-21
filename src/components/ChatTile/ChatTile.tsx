import React from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import { AppText } from "../AppText/AppText";
import { ChatTileProps } from "./types";
import { Spacing } from "../Spacing/spacing";

export function ChatTile({ avatar, username, lastMessage }: ChatTileProps) {
    return (
        <Pressable>
            <View style={styles.container}>
                <Image source={require("../../../assets/friend.png")} style={styles.imageStyle} />
                <View>
                    <AppText fontFamily="OpenSans-Medium" color="black">Zendaya</AppText>
                    <AppText fontFamily="OpenSans-Regular" color="grey">you: on my way to the airport | 3:45pm</AppText>
                </View>
            </View>
            <Spacing height={24} />
        </Pressable>
    )
}