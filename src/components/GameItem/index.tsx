import { GamesListResponse } from "@/interface";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

type GameItemProps = {
  game: GamesListResponse;
};

export const GameItem = ({ game }: GameItemProps) => {
  return (
    <Pressable
      className="w-full h-44 rounded-lg"
      onPress={() => console.log("teste")}
    >
      <Image
        source={{ uri: game.background_image }}
        className=" w-full h-full rounded-lg opacity-40 absolute"
      />

      <View className="px-4 pt-28 gap-1">
        <Text className="text-white font-bold">{game.name}</Text>
        <View className="flex-row gap-1">
          <MaterialIcons name="star" size={20} color="#FABB1E" />
          <Text className="text-white">{game.metacritic}/100</Text>
        </View>
      </View>
    </Pressable>
  );
};
