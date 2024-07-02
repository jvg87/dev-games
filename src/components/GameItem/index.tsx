import { GamesListResponse } from "@/interface";
import { formattingRating } from "@/utils/formattingRating";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

type GameItemProps = {
  game: GamesListResponse;
};

export const GameItem = ({ game }: GameItemProps) => {
  return (
    <Link href={{ pathname: "details/[id]", params: game }} asChild>
      <Pressable className="w-full h-44 rounded-lg">
        <Image
          source={{ uri: game.background_image }}
          className=" w-full h-full rounded-lg opacity-40 absolute"
        />

        <View className="px-4 pt-28 gap-1">
          <Text className="text-white font-bold">{game.name}</Text>
          <View className="flex-row gap-1">
            <MaterialIcons name="star" size={20} color="#FABB1E" />
            <Text className="text-white">
              {formattingRating(game.metacritic)}/10
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
