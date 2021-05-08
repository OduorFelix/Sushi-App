import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RoundedIconButton } from ".";
import { Box, Text } from "./Theme";


interface TopSushiItemProps{
    title: string;
    subTitle: string;
    image: any;
    price: string;
    onPress: () => void;
    backgroundColor?: string;
}

const TopSushiItem = ({ title, subTitle, image, price, backgroundColor, onPress }: TopSushiItemProps) => {
    return (
        <Box
            backgroundColor="dark"
            style={{
                height,
                width,
                borderRadius,
                padding: 15,
                marginLeft: 8,
                marginRight: 4,
            }}
        >
            <Box>
                <Box alignItems="center">
                    <Image
                        source={image}
                        style={{ height: 150, width: 200 }}
                        resizeMode="contain"
                    />
                </Box>

                <Box margin="s">
                    <Text variant="hedaderTitle" color="white">{title}</Text>
                    <Text variant="body" color="white" >{ subTitle }</Text>
                </Box>

                <Box flexDirection="row" justifyContent="space-between" alignItems="center" margin="s">
                    <Box flexDirection="row">
                        <Text variant="text" color="white">$</Text>
                        <Text variant="textPrice" color="white">{ price }</Text>
                        <Text variant="text" color="white">.00</Text>
                    </Box>

                    <Box
                        backgroundColor="grey"
                        padding="s"
                        borderRadius="m"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <TouchableOpacity {...{ onPress }}>
                            <Text variant="text">Order</Text>
                        </TouchableOpacity>
                    </Box>

                </Box>
                
            </Box>

        </Box>
    )
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.57;
const height = width * (455 / 320);
const borderRadius = 24;

export default TopSushiItem;