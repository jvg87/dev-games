import { GameResponse } from "@/interface";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, View } from "react-native";

type HeaderDetailProps =
  | Pick<GameResponse, "background_image" | "background_image_additional">
  | undefined;

export const HeaderDetail = (data: HeaderDetailProps) => {
  const route = useRouter();

  const url = [data?.background_image, data?.background_image_additional];

  return (
    <View className="w-full h-80 mb-10">
      <FlatList
        data={url}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} className="w-96 h-80 " />
        )}
        horizontal
      />
      <Pressable
        className="w-12 h-12 rounded-full bg-blue-950 items-center justify-center absolute top-10 left-3 "
        onPress={() => route.back()}
      >
        <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
      </Pressable>
      <Pressable className="w-12 h-12 rounded-full bg-blue-950 items-center justify-center absolute top-10 right-3 ">
        <MaterialIcons name="bookmark-outline" size={30} color="#ffffff" />
      </Pressable>
    </View>
  );
};
