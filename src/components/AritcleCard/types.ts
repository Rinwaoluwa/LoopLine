export interface ArticleCardProps {
    id: string;
    title: string;
    category: string;
    image: string;
    authorName: string;
    date: string;
    onPress?: () => void;
}
