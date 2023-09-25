import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { themeColors } from "../theme";
import { categories, coffeeItems } from "../constants";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/coffeeCard";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar barStyle="dark-content" />
      <Image
        className="w-full absolute top-5 opacity-10"
        source={require("../assets/images/beansBackground1.png")}
        style={{ height: 220 }}
      />

      <SafeAreaView className="flex-1">
        {/* avatar and bell icon */}
        <View className="flex-row justify-between items-center px-4">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-10 w-10 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="text-base font-semibold">Lagos, Nigeria </Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>
        {/* search bar */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              placeholderTextColor="#8c9ba3"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            key={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id === activeCategory;
              let isActiveText = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-2 px-5 rounded-full mr-2 shadow"
                >
                  <Text className={"font-semibold " + isActiveText}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* coffee cards */}
        {/* install carousel  npm i react-native-snap-carousel */}
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            loop={true}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
