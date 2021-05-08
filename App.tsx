import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather as Icon } from "@expo/vector-icons";



// Custom Components
import Header from './src/components/Header';
import { theme, LoadAssets, Box, Text, CategoriesItem, TopSushiItem } from './src/components';
import { CategoryData } from "./src/DummyData/Catagories";
import { TopSushiData } from "./src/DummyData/TopSushi";
import { ToppingsData } from "./src/DummyData/Toppings";
import { TouchableOpacity } from 'react-native';

// Importing Fonts
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

function HomeScreen({navigation}: any) {

  const renderCategories = ({ item }: any) => {
    return (
          <CategoriesItem
            title={item.title}
            icon={item.icon}
            onPress={() => alert(item.title)}
            dark
          />
    )
  }

  const renderTopSushi = ({item}: any) => {
    return (
          <TopSushiItem
            title={item.title}
            subTitle={item.subTitle}
            price={item.price}
            image={item.image}
            onPress={() => navigation.navigate("Details", {item: item})}
          />
    )
  }

  return (
    <Box flex={1} backgroundColor="bg1">
        <Header
            title="MySushi"
            left={{ icon: "menu", onPress: () => alert("Open Menu") }}
            right={{ icon: "user", onPress: () => alert("Open Profile") }}
      />
      <Box flex={1}>
        <ScrollView showsHorizontalScrollIndicator={false}>

            <Box padding="m" flexDirection="row" alignItems="center">
              <Box marginRight="m">
                <Image
                  source={require('./assets/images/emoji-hand.png')}
                  style={{height: 20, width: 20}}
                />
              </Box>
              <Text variant="hedaderTitle">Hi, Felix</Text>
            </Box>

            <Box padding="m" width={300}>
              <Text variant="title">What is your favorite sushi?</Text>
            </Box>

            {/* Search Section */}
            <Box
              margin="m"
              backgroundColor="white"
              borderRadius="l"
            >
              <Box flexDirection="row" margin="sp">
                <Box marginRight="m">
                    <Icon size={23} name="search"/>
                </Box>

                <Box>
                  <Text variant="body">Search your sushi...</Text>
                </Box>

              </Box>
            </Box>

            {/* Categories Section */}
            <Box>
              <Box flexDirection="row" justifyContent="space-between" alignItems="center" margin="m">
                <Box>
                  <Text variant="categoryTitle">Categories</Text>
                </Box>
                <Box>
                  <Text variant="text">See all</Text>
                </Box>
              </Box>

              {/* Categories Displaying */}
              <Box justifyContent="center" alignItems="center">
                    <FlatList
                      data={CategoryData}
                      renderItem={renderCategories}
                      keyExtractor={(item) => item.id.toString()}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                  />
              </Box>
            </Box>

            {/* Top Sushi Section */}
            <Box>
              <Box flexDirection="row" justifyContent="space-between" alignItems="center" margin="m">
                <Box>
                  <Text variant="categoryTitle">Top Sushi</Text>
                </Box>
                <Box>
                  <Text variant="text">See all</Text>
                </Box>
              </Box>

              {/* TopSushi Displaying */}
              <Box justifyContent="center" alignItems="center">
                    <FlatList
                      data={TopSushiData}
                      renderItem={renderTopSushi}
                      keyExtractor={(item) => item.id.toString()}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                  />
              </Box>
            </Box>

         </ScrollView>
      </Box>
      <StatusBar style="auto" />
    </Box>
  );
}


function DetailsScreen({ route, navigation }: any) {
  const { item } = route.params

  const renderCategories = ({ item }: any) => {
    return (
          <CategoriesItem
            title={item.title}
            icon={item.icon}
            onPress={() => alert(item.title)}
            dark
          />
    )
  }


  return (
    <Box flex={1} backgroundColor="bg1">
        <Header
            title=""
            left={{ icon: "chevron-left", onPress: () => navigation.goBack()}}
            right={{ icon: "heart", onPress: () => alert("Open Profile") }}
      />
      <Box flex={1}>
        <ScrollView showsHorizontalScrollIndicator={false}>

          <Box marginTop="s">
            <Text variant="title" textAlign="center">{item.title}</Text>
            <Text variant="body" textAlign="center">{ item.subTitle }</Text>
          </Box>

          <Box flexDirection="row" justifyContent="center" alignItems="center" marginTop="m">
            <Icon size={23} name="star" />
            <Icon size={23} name="star" />
            <Icon size={23} name="star" />
            <Icon size={23} name="star" />
            <Icon size={23} name="star"/>
          </Box>

          <Box justifyContent="center" alignItems="center" marginTop="m">
              <FlatList
                data={ToppingsData}
                renderItem={renderCategories}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
          </Box>

          <Box justifyContent="center" alignItems="center" marginTop="m">
            <Image
              source={item.image}
              style={{height: 200, width: 200}}
            />
          </Box>

          <Box
            margin="xl"
            padding="m"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
            borderRadius="m"
          >
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" margin="s">
              <Box>
                  <Box flexDirection="row">
                      <Text variant="text">$</Text>
                      <Text variant="textPrice">{ item.price }</Text>
                      <Text variant="text">.00</Text>
                  </Box>

                  <Box marginTop="s">
                    <Text variant="text">Total Price</Text>
                  </Box>
                </Box>
              
                <Box
                    backgroundColor="dark"
                    padding="sp"
                    borderRadius="m"
                    alignItems="center"
                    justifyContent="center"
                    marginLeft="xl"
                >
                    <TouchableOpacity onPress={() => alert("Order Coming Soon!")}>
                        <Text variant="text" color="white">Place Order</Text>
                    </TouchableOpacity>
                </Box>

            </Box>
          </Box>

        </ScrollView>
      </Box>
      <StatusBar style="auto" />
    </Box>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>

  );
}


export default App;