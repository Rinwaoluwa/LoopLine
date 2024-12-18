import { forwardRef, ReactNode } from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { AppTextStyle } from "./types";
import { palette } from "../../config/palette";
import { fontPixel } from "../../config/normalise";



export function AppText({ fontSize, fontFamily, children, color, style }: AppTextStyle) {
  return (
    <Text
      style={[
        {
          fontSize: fontPixel(fontSize as number),
          fontFamily: fontFamily,
          color: color ? palette[color] : palette['black'],
          ...style
        },
      ]}
    >
      {children}
    </Text>
  );
}