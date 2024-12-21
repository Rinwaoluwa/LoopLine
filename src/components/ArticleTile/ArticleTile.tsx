import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { AppText } from '../AppText/AppText';
import { ArticleCardProps } from './types';
import { styles } from './styles';
import { Spacing } from '../Spacing/spacing';

export function ArticleTile({
    title,
    category,
    image,
    date,
    onPress,
}: ArticleCardProps) {

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.topRow}>
                    <View style={styles.categoryPill}>
                        <AppText fontFamily="OpenSans-Regular" color="grey">
                            {category}
                        </AppText>
                    </View>
                    <AppText fontFamily="OpenSans-Regular" color="grey">
                        {date}
                    </AppText>

                </View>

                <Spacing height={12} />
                <AppText
                    fontSize={16}
                    fontFamily="OpenSans-Bold"
                    color="black"
                    numberOfLines={2}
                >
                    {title}
                </AppText>
            </View>
        </Pressable>
    );
};


