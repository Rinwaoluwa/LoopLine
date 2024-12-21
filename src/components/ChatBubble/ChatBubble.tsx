import React from 'react';
import { View, Image } from 'react-native';
import { ChatBubbleProps } from './types';
import { styles } from './styles';
import { AppText } from '../AppText/AppText';
import { Spacing } from '../Spacing/spacing';


export function ChatBubble({ message }: ChatBubbleProps) {
    const { text, isSent, avatar } = message;
    console.log(isSent)

    return (
        <View style={[
            styles.container,
            isSent ? styles.sentContainer : styles.receivedContainer
        ]}>
            {isSent && avatar && (
                <Image
                    // source={{ uri: avatar }}
                    source={require("../../../assets/friend.png")}
                    style={styles.avatar}
                />
            )}
            <View style={[
                styles.bubble,
                isSent ? styles.sentBubble : styles.receivedBubble
            ]}>
                <AppText
                    fontFamily="OpenSans-Regular"
                    color='black'
                    style={styles.messageText}
                >
                    {text}
                </AppText>
            </View>
            <Spacing height={30} />
        </View>
    );
}



