import React, { useEffect, useState } from 'react';
import { View, Pressable, ImageBackground } from 'react-native';
import Icon from '../../../assets/svgs/icon';
import { palette } from '../../config/palette';
import { styles } from './styles';
import { AppText } from '../AppText/AppText';
import { Spacing } from '../Spacing/spacing';
import { ArticleCardProps } from './types';
import { useAppDispatch, useAppSelector } from '../../config/store/hooks';
import { RootState } from '../../config/store/store';
import { addBookmark, removeBookmark } from '../../config/store/slice/bookmarkSlice';


export function ArticleCard({
    id,
    title,
    category,
    authorName,
    date,
    image,
    onPress,
}: ArticleCardProps) {
    const dispatch = useAppDispatch();
    const bookmarks = useAppSelector((state: RootState) => state.bookmarks);
    const isBookmarked = bookmarks.bookmarks.find(bookmark => bookmark.id === id);
    const [saved, setSaved] = useState(isBookmarked?.isBookmarked ?? false);


    // We have this useEffect here to monitor changes to the isBookmarked variable.
    // This ensures that anytime a user bookmarks or unbookmarks the article from the detailed view,
    // it is reflected here as well. If the article is not bookmarked, we set the saved state to false.
    useEffect(()=> {
        if(!isBookmarked) {
            setSaved(false);
        }
    },[isBookmarked?.isBookmarked]);

    const handleBookmark = () => {
        setSaved(!saved)
        if (isBookmarked) {
            dispatch(removeBookmark(id));
        } else {
            dispatch(addBookmark({
                id,
                title,
                category,
                authorName,
                date,
                image,
                isBookmarked: saved,
            }));
        }
    };


    return (
        <Pressable style={styles.container} onPress={onPress}>
            <ImageBackground
                source={{ uri: image }}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.topRow}>
                    <View style={styles.categoryPill}>
                        <AppText fontFamily='OpenSans-Regular' color='white'>{category}</AppText>
                    </View>
                    <Pressable
                        style={styles.bookmarkButton}
                        onPress={handleBookmark}
                        hitSlop={8}
                    >
                        <Icon name={saved ? "bookmarkFill" : "bookmark"} fill={palette['white']} />
                    </Pressable>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <AppText fontFamily="OpenSans-Bold" fontSize={16} color='black' numberOfLines={2}>{title}</AppText>
                <Spacing height={12} />

                <View style={styles.footer}>
                    <AppText numberOfLines={1} fontSize={12} fontFamily='OpenSans-Regular' color='grey' style={styles.byLine}>
                        {authorName}
                    </AppText>

                    <AppText fontFamily='OpenSans-Regular' color='grey' style={styles.date}>
                        {date}
                    </AppText>
                </View>
            </View>
            <Spacing height={24} />
        </Pressable>
    );
};



