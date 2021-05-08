import React from "react";
import { RoundedIconButton } from ".";
import { Box, Text } from "./Theme";


interface CategoriesItemProps{
    title: string;
    icon: string;
    onPress: () => void;
    dark: boolean;
}

const CategoriesItem = ({ title, icon, dark, onPress }: CategoriesItemProps) => {
    const color = dark ? "white" : "dark";
    const backgroundColor = dark ? "white" : "white";
    return (
        <Box  margin="m" alignItems="center">
            <RoundedIconButton
                size={52}
                iconRatio={0.45}
                name={icon}
                onPress={onPress}
                {...{ color, backgroundColor }}
            />
            <Text variant="text2" marginTop="sp">{ title }</Text>
        </Box>
    )
}


export default CategoriesItem;