import React from "react";
import { Feather as Icon } from "@expo/vector-icons";


import  { Box, Text, Theme } from "./Theme";


export interface RoundedIconProps { 
    name: any;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor?: keyof Theme["colors"];
    iconRatio: number;
 };

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }: RoundedIconProps) => { 
    const iconSize = size * iconRatio;
    return (
        <Box
            height={size}
            width={size}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            marginBottom="s"
            style={{ borderRadius: size / 2 }}
            {...{ backgroundColor }}
        >
            <Text textAlign="center" style={{ width: iconSize, height: iconSize}} {...{ color }}>
                <Icon
                    color="#181d2d"
                    size={iconSize}
                    style={{ textAlign: "center"}}
                    {...{ name }}
                /> 
            </Text>
        </Box>
    );
 };

RoundedIcon.defaultProps = {
    iconRatio: 0.7,
};

export default RoundedIcon;