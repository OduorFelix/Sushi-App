import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RoundedIconButton } from ".";
import { Box, Text } from "./Theme";


interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right?: {
        icon: string;
        onPress: () => void;
    };
    dark: boolean;
 };


const Header = ({left, title, right, dark}: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? "white" : "dark";
    const backgroundColor = dark ? "dark" : "white";
    return (
        <Box
            flexDirection="row"
            style={{ marginTop: insets.top }}
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="m"
        >
          <RoundedIconButton
            size={44}
            iconRatio={0.5}
            name={left.icon}
            onPress={left.onPress}
            {...{ color, backgroundColor }}
        />
        <Text variant="hedaderTitle" {...{ color }}>
            {title}
        </Text>
            { right ? (
                <RoundedIconButton
                    size={44}
                    iconRatio={0.5}
                    name={right.icon}
                    onPress={right.onPress}
                    {...{ color, backgroundColor }}
                />
            ) : (
                    <View style={{ width: 44}} />
            )}
        </Box>
    );
 };

Header.defaultProps = {
    dark: false,
};

export default Header;