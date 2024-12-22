import React from "react";
import { AppText } from "../../components/AppText/AppText";
import { Box } from "../../components/Box/Box";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { styles } from "./styles";
import { useAppSelector } from "../../config/store/hooks";
import { RootState } from "../../config/store/store";
import { ScrollView, View } from "react-native";
import { ArticleTile } from "../../components/ArticleTile/ArticleTile";
import { Spacing } from "../../components/Spacing/spacing";

export function SavedArticles({ navigation }: any) {
    const bookmarks = useAppSelector((state: RootState) => state.bookmarks);
    return (
        <Box>
            {bookmarks.bookmarks.length === 0 ? (
                <>
                    <EmptyState />
                    <AppText
                        fontFamily="OpenSans-Medium"
                        fontSize={16}
                        style={styles.textStyle}
                    >
                        Oops! Nothing saved yet. {"\n"}Add some articles to keep things handy.
                    </AppText>
                </>) : (
                <>
                    <AppText fontFamily="OpenSans-Bold" style={styles.textStyle} fontSize={20}>Bookmarks</AppText>
                    <Spacing height={24} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {bookmarks.bookmarks.map((bookmark, index) => (
                            <View key={bookmark.id + index}>
                                <ArticleTile
                                    image={bookmark.image}
                                    category={bookmark.category}
                                    date={bookmark.date}
                                    title={bookmark.title}
                                    onPress={() => navigation.navigate("article", {...bookmark, isBookmarked: true})}
                                />
                                <Spacing height={20} />
                            </View>
                        ))}
                    </ScrollView>
                </>)
            }

        </Box>
    )
}