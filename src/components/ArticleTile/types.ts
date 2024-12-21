import { ImageSourcePropType } from 'react-native';

export interface ArticleCardProps {
  title: string;
  category: string;
  image: string;
  date: string;
  onPress?: () => void;
}

