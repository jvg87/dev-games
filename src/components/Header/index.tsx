import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, View } from "react-native";

export const Header = () => {
  return (
    <>
      <View className="flex-row justify-between items-center">
        <Image source={require("@/assets/logo.png")} />
        <Link asChild href="favorites">
          <Pressable className=" bg-gray-800 p-2 rounded-full">
            <MaterialIcons name="bookmark-outline" size={30} color="#fff" />
          </Pressable>
        </Link>
      </View>
    </>
  );
};
