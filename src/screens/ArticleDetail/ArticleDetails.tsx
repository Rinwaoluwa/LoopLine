import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { Box } from "../../components/Box/Box";
import { styles } from "./styles";
import Icon from "../../../assets/svgs/icon";
import { AppText } from "../../components/AppText/AppText";
import { palette } from "../../config/palette";
import { normalise } from "../../config/normalise";
import { Spacing } from "../../components/Spacing/spacing";
import { useState } from "react";
import { addBookmark, removeBookmark } from "../../config/store/slice/bookmarkSlice";
import { useAppDispatch } from "../../config/store/hooks";

export function ArticleDetail({ route, navigation }: any) {
    const dispatch = useAppDispatch();
    const {
        id,
        title,
        category,
        authorName,
        date,
        image,
        isBookmarked
    } = route.params;
    const [saved, setSaved] = useState(isBookmarked);

    const handleBookmark = () => {
        setSaved(!saved)
        if (saved) {
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
        <Box>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name="back" size={normalise(30)} />
                </Pressable>
                <Icon name="bell" />
            </View>
            <ScrollView style={styles.flex} bounces={false} showsVerticalScrollIndicator={false}>
                <Spacing height={24} />

                <ImageBackground
                    source={{ uri: image }}
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                >
                    <Pressable
                        style={styles.bookmarkButton}
                        onPress={handleBookmark}
                        hitSlop={8}
                    >
                        <Icon name={saved ? "bookmarkFill" : "bookmark"} fill={palette['white']} />
                    </Pressable>
                </ImageBackground>
                <Spacing height={18} />

                <View style={styles.topRow}>
                    <View style={styles.categoryPill}>
                        <AppText fontFamily='OpenSans-Regular' color='black'>{category}</AppText>
                    </View>
                    <AppText fontFamily='OpenSans-Regular' color='grey'>{date}</AppText>
                </View>

                <Spacing height={12} />

                <AppText fontFamily="OpenSans-Bold" fontSize={18} color='black' numberOfLines={2}>
                    {title}
                </AppText>

                <Spacing height={12} />

                <AppText fontFamily='OpenSans-Regular' color='black'>{authorName}</AppText>

                <Spacing height={15} />

                <AppText
                    fontSize={16}
                    fontFamily="OpenSans-Regular"
                    color="black"
                    style={styles.bodyText}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta.
                    Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis.
                    Facilisis faucibus semper cras purus.
                    {"\n"}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas id sit eu tellus sed cursus eleifend id porta.
                    {"\n"}
                    Fermentum et eget libero lectus. Amet, tellus aliquam, dignissim enim placerat purus nunc, ac ipsum. Ac pretium.
                </AppText>
            </ScrollView>

        </Box>
    )
}