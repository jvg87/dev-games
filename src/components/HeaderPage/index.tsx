import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

type HeaderPageProps = {
  name: string;
};

export const HeaderPage = ({ name }: HeaderPageProps) => {
  const route = useRouter();
  return (
    <View className="flex-row items-center gap-3 mb-4">
      <Pressable className="w-12 h-12" onPress={() => route.back()}>
        <MaterialIcons name="arrow-back" size={40} color="#ffffff" />
      </Pressable>
      <Text className="text-white font-bold text-2xl">{name}</Text>
    </View>
  );
};
