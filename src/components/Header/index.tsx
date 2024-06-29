import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, View } from "react-native";

export const Header = () => {
  return (
    <>
      <View className="flex-row justify-between items-center">
        <Image source={require("@/assets/logo.png")} />
        <Pressable className=" bg-gray-800 p-2 rounded-full">
          <MaterialIcons name="bookmark-outline" size={30} color="#fff" />
        </Pressable>
      </View>
    </>
  );
};
