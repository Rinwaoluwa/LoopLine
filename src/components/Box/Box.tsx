import React from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import { BoxProps } from "./types";


export const Box = ({ children }: BoxProps) => {
    return (
        <>
            <StatusBar style="dark" />
            <View
                style={[styles.container, styles.flex]}
            >
                <SafeAreaView style={styles.flex}>
                    {children}
                </SafeAreaView>
            </View>
        </>
    );
};

