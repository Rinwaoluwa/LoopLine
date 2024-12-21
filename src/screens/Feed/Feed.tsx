import React from "react";
import { useForm } from "react-hook-form";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import { Box } from "../../components/Box/Box";
import { AppText } from "../../components/AppText/AppText";
import Icon from "../../../assets/svgs/icon";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Spacing } from "../../components/Spacing/spacing";
import { StraightLine } from "../../components/StraightLine/StraightLine";
import { ArticleCard } from "../../components/AritcleCard/AritcleCard";
import { CategoryTile } from "../../components/CategoryTile/CategoryTile";
import { ArticleTile } from "../../components/ArticleTile/ArticleTile";
import { fetchTopStories } from "../../apis/apis";
import { useEffect, useState } from "react";
import { ContentLoader } from "../../components/Loader/ContentLoader";
import { ListLoader } from "../../components/Loader/ListLoader";


const categories = [
    { id: 'home', label: 'All' },
    { id: 'technology', label: 'Technology' },
    { id: 'politics', label: 'Politics' },
    { id: 'business', label: 'Business' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'travel', label: 'Travel' },
    { id: 'science', label: 'Science' },
    { id: 'helalth', label: 'Health' },
];

export function Feed({ navigation }: any) {
    const [topStories, setTopStories] = useState<any>([]);
    const [isLoadingTopStories, setLoadingTopStories] = useState(true);
    const [isLoadingArticles, setLoadingArticles] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [articles, setArticles] = useState<any>([]);
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            search: "",
        },
        mode: "onSubmit",
    });

    const query = getValues("search");

    const data2 = [
        {
            id: 1,
            category: "Technology",
            date: "Jan 3nd 2024",
            title: "whatchu mean you don't got time for that",
        },
        {
            id: 2,
            category: "Movie",
            date: "Jan 3nd 2024",
            title: "Sup poola makiato",
        },
        {
            id: 3,
            category: "Food",
            date: "Jan 3nd 2024",
            title: "New cucumber salade",
        },
    ]

    const onSubmit = ({ search }: { search: string }) => {
        const fetch = async () => {
            setLoadingTopStories(true);
            try {
                const data = await fetchTopStories(search.trim());
                setTopStories(data?.results);
            } finally {
                setLoadingTopStories(false);
                setLoadingArticles(false);
            }
        }
        fetch();

    }

    useEffect(() => {
        const getTopStories = async () => {
            try {
                const data = await fetchTopStories();
                setTopStories(data?.results);
                setArticles(data?.results);
            } finally {
                setLoadingTopStories(false);
                setLoadingArticles(false)
            }
        };

        getTopStories();
    }, []);


    const handleSelectCategory = async (categoryId: string) => {
        setSelectedCategory(categories.find((c) => c.id === categoryId) || categories[0]);
        setLoadingArticles(true)
        try {
            const data = await fetchTopStories(categoryId);
            setArticles(data?.results)
        } finally {
            setLoadingArticles(false);
        }

    }

    return (
        <Box>
            <View style={styles.header}>
                <AppTextInput
                    control={control}
                    label="Search"
                    placeholder="Arts, Politics, Technology"
                    error={errors.search?.message}
                    name="search"
                    autoCapitalize="none"
                    left="search"
                    onSubmitEditing={handleSubmit(onSubmit)}
                />
                <Icon name="bell" />
            </View>
            <Spacing height={10} />
            <AppText fontFamily="OpenSans-Bold" fontSize={24}>Recommended</AppText>
            <Spacing height={16} />

            <View style={styles.recommedationsContainer}>
                {isLoadingTopStories ? <ContentLoader /> :
                    <FlatList
                        data={topStories}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Spacing width={20} />}
                        renderItem={({ item }) => (
                            <ArticleCard
                                title={item.title}
                                category={item.subsection || item.section || query}
                                authorName={item.byline}
                                date={item.date}
                                image={item.multimedia}
                                onPress={() => navigation.navigate("article", item)}
                                id={item}
                            />
                        )}
                    />
                }
            </View>
            <Spacing height={24} />

            <StraightLine />

            <Spacing height={24} />

            <CategoryTile
                categories={categories}
                onSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory.id}
            />


            {isLoadingArticles ? <ListLoader /> :
                <>
                    <Spacing height={24} />
                    <FlatList
                        data={articles}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Spacing height={16} />}
                        renderItem={({ item }) => (
                            <ArticleTile
                                image={item.multimedia}
                                category={selectedCategory.label}
                                date={item.date}
                                title={item.title}
                            />
                        )}
                    />
                </>
            }
        </Box>
    )
}