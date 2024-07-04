import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, TextInput, View } from "react-native";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export const Input = () => {
  const [name, setName] = useState("");

  const route = useRouter();

  const handleSearch = (name: string) => {
    if (name === "") {
      Alert.alert("OPS!", "Digite algum nome");
      return;
    }

    route.navigate({ pathname: "search/[name]", params: { name } });
  };

  return (
    <View className="flex-row gap-3 items-center">
      <TextInput
        className="w-96 h-14 bg-gray-800 rounded-3xl px-5 text-white text-lg"
        placeholder="Looking for a game?"
        placeholderTextColor={colors.gray[500]}
        onChangeText={(text) => setName(text)}
      />
      <Pressable onPress={() => handleSearch(name)}>
        <MaterialIcons name="search" size={40} color={colors.red[600]} />
      </Pressable>
    </View>
  );
};
