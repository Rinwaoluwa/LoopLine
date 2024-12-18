import { Controller } from 'react-hook-form';
import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';
import { AppTextInputProps } from './types';
import { palette } from '../../config/palette';
import { fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '../../config/normalise';
import Icon from '../../../assets/svgs/icon';
import { AppText } from '../AppText/AppText';



export const AppTextInput = ({
    error,
    onBlur: pureOnBlur,
    onFocus,
    ...props
}: AppTextInputProps) => {

    return (
        <View style={[styles.textInputContainer]}>
            <Controller
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={
                        {
                            flexDirection: "row",
                            gap: pixelSizeHorizontal(6),
                            alignItems: "center",
                            borderColor: error ? palette['red'] : "",
                            borderWidth: error ? normalise(1) : 0,
                            borderRadius: normalise(20),
                            paddingHorizontal: pixelSizeHorizontal(24),
                            backgroundColor: palette['off-white'],
                        }
                    }
                    >
                        {props.left && (
                            <Pressable onPress={props?.onPressLeftIcon}>
                                <Icon name={props.left} fill={palette['grey']} />
                            </Pressable>
                        )}
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            autoCapitalize="none"
                            editable={props?.editable}
                            style={[
                                props.containerStyle,
                                {
                                    width: "80%",
                                    fontFamily: "medium",
                                    fontSize: fontPixel(14),
                                    color: palette['grey'],
                                    height: heightPixel(50),
                                }
                            ]}
                            onPressIn={() => props.onPress?.()}
                            {...props}
                            placeholderTextColor={palette['grey']}
                        />
                        {props.right && (
                            <Pressable onPress={props?.onPressRigthtIcon}>
                                <Icon name={props.right} />
                            </Pressable>
                        )}
                    </View>
                )}
                name={props.name}
            />
            {error ? <AppText fontSize={12} color={'red'} fontFamily="OpenSans-Medium">{error}</AppText> : null}
        </View>
    );
};


const styles = StyleSheet.create({
    textInputContainer: {
        marginVertical: pixelSizeVertical(8),
    },
});