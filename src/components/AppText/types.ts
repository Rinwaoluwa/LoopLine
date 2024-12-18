import { TextProps, TextStyle } from "react-native";
import { Palette } from "../../config/palette";
import { ReactNode } from "react";
import { Fonts } from "../../config/fonts";

export interface AppTextStyle extends TextProps {
    fontSize?: TextStyle['fontSize'];
    fontFamily: Fonts,
    color?: Palette;
    children: ReactNode;
    style?: Omit<TextStyle, 'fontSize'>
}