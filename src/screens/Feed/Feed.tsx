import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

export function Feed() {
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
    // const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'technology', label: 'Technology' },
        { id: 'lifestyle', label: 'Lifestyle' },
        { id: 'business', label: 'Business' },
        { id: 'culture', label: 'Culture' },
    ];

    const data = [
        {
            id: 1,
            category: "Tech",
            date: "Jan 3, 2024",
            title: "New VR Headsets That Will Shape the Metaverse"
        },
        {
            id: 2,
            category: "Tech",
            date: "Jan 3, 2024",
            title: "Hello World"
        },
        {
            id: 3,
            category: "Tech",
            date: "Jan 3, 2024",
            title: "Hello World"
        },
    ]

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

    return (
        <Box>
            <View style={styles.header}>
                <AppTextInput
                    control={control}
                    label="Search"
                    placeholder="Search..."
                    error={errors.search?.message}
                    name="search"
                    autoCapitalize="none"
                    left="search"
                />
                <Icon name="bell" />
            </View>
            <Spacing height={24} />
            <AppText fontFamily="OpenSans-Bold" fontSize={24}>Recommended</AppText>
            <Spacing height={16} />

            <View style={{ height: 300 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <Spacing width={20} />}
                    renderItem={({ item }) => (
                        <ArticleCard
                            category={item.category}
                            date={item.date}
                            image=""
                            title={item.title}
                        />
                    )}
                />
            </View>
            <Spacing height={24} />

            <StraightLine />

            <Spacing height={24} />

            <CategoryTile
                categories={categories}
            />

            <Spacing height={24} />

            <FlatList
                data={data2}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <Spacing height={16} />}
                renderItem={({ item }) => (
                    <ArticleTile
                        image={require("../../../assets/test2.png")}
                        category={item.category}
                        date={item.date}
                        title={item.title}
                    />
                )}
            />
        </Box>
    )
}