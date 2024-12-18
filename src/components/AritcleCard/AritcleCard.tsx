import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Icon from '../../../assets/svgs/icon';
import { palette } from '../../config/palette';
import { styles } from './styles';
import { AppText } from '../AppText/AppText';
import { Spacing } from '../Spacing/spacing';
import { ArticleCardProps } from './types';


export function ArticleCard ({
    title,
    category,
    authorName,
    date,
    onPress,
    onBookmarkPress,
}: ArticleCardProps) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <ImageBackground
                source={require('../../../assets/test.png')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.topRow}>
                    <View style={styles.categoryPill}>
                        <AppText fontFamily='OpenSans-Regular' color='white'>{category}</AppText>
                    </View>
                    <Pressable
                        style={styles.bookmarkButton}
                        onPress={onBookmarkPress}
                        hitSlop={8}
                    >
                        <Icon name="bookmark" fill={palette['white']} />
                    </Pressable>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <AppText fontFamily="OpenSans-Bold" fontSize={18} color='black' numberOfLines={2}>{title}</AppText>
                <Spacing height={12} />

                <View style={styles.footer}>
                    <AppText fontFamily='OpenSans-Regular' color='grey'>
                        By: {authorName}
                    </AppText>

                    <AppText fontFamily='OpenSans-Regular' color='grey'>
                        {date} •
                    </AppText>
                </View>
            </View>
            <Spacing height={24} />
        </Pressable>
    );
};



