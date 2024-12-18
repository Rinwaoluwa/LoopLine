import { ImageSourcePropType } from 'react-native';

export interface ArticleCardProps {
  title: string;
  category: string;
  image: ImageSourcePropType;
  date: string;
  onPress?: () => void;
}

