import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import home from "./icons/home.svg";
import bookmark from "./icons/bookmark.svg";
import search from "./icons/search.svg";
import chat from "./icons/chat.svg";
import back from "./icons/angle-left-b.svg";
import bell from "./icons/bell.svg";

export const ICONS = {
    home,
    bookmark,
    search,
    chat,
    back,
    bell,
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
}
  
export type Props = IconProps;