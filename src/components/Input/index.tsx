import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export const Input = () => {
  const [name, setName] = useState("");

  return (
    <View className="flex-row gap-3 items-center">
      <TextInput
        className="w-96 h-14 bg-gray-800 rounded-3xl px-5 text-white text-lg"
        placeholder="Looking for a game?"
        placeholderTextColor={colors.gray[500]}
        onChangeText={(text) => setName(text)}
      />
      <Link href={{ pathname: "search/[name]", params: { name } }} asChild>
        <Pressable>
          <MaterialIcons name="search" size={40} color={colors.red[600]} />
        </Pressable>
      </Link>
    </View>
  );
};
