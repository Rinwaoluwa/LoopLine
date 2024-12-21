import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { Box } from "../../components/Box/Box";
import { useForm } from "react-hook-form";
import { styles } from "./styles";
import Icon from "../../../assets/svgs/icon";
import { AppText } from "../../components/AppText/AppText";
import { palette } from "../../config/palette";
import { normalise } from "../../config/normalise";
import { Spacing } from "../../components/Spacing/spacing";

export function ArticleDetail({ route, navigation }: any) {
    const article = route.params;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            search: "",
        },
        mode: "onSubmit",
    });

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
                    source={require('../../../assets/test.png')}
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                >
                    <Pressable
                        style={styles.bookmarkButton}
                        // onPress={onBookmarkPress}
                        hitSlop={8}
                    >
                        <Icon name="bookmark" fill={palette['white']} />
                    </Pressable>
                </ImageBackground>
                <Spacing height={18} />

                <View style={styles.topRow}>
                    <View style={styles.categoryPill}>
                        <AppText fontFamily='OpenSans-Regular' color='black'>Tech</AppText>
                    </View>
                    <AppText fontFamily='OpenSans-Regular' color='grey'>Jan 1, 2021 •</AppText>
                </View>

                <Spacing height={12} />

                <AppText fontFamily="OpenSans-Bold" fontSize={18} color='black' numberOfLines={2}>
                    New VR Headsets That Will Shape the Metaverse
                </AppText>

                <Spacing height={12} />

                <AppText fontFamily='OpenSans-Regular' color='black'>By: Rinwa</AppText>

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