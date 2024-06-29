import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";

export const Input = () => {
  return (
    <View className="flex-row gap-3 items-center">
      <TextInput
        className="w-96 h-14 bg-gray-800 rounded-3xl px-5 text-white text-lg"
        placeholder="Looking for a game?"
        placeholderTextColor={colors.gray[500]}
      />
      <Pressable>
        <MaterialIcons name="search" size={40} color={colors.red[600]} />
      </Pressable>
    </View>
  );
};
