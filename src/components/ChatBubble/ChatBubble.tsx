import React from 'react';
import { View, Image } from 'react-native';
import { ChatBubbleProps } from './types';
import { styles } from './styles';
import { AppText } from '../AppText/AppText';
import { Spacing } from '../Spacing/spacing';

export function ChatBubble({ message }: ChatBubbleProps) {
    const { text, isSent } = message;

    return (
        <View style={[
            styles.container,
            isSent ? styles.sentContainer : styles.receivedContainer
        ]}>
            {isSent && (
                <Image
                    source={require("../../../assets/friend.jpg")}
                    style={styles.avatar}
                />
            )}
            <View style={[
                styles.bubble,
                isSent ?  styles.receivedBubble : styles.sentBubble,
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



