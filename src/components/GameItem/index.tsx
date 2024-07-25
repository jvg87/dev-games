import { useFavoriteMutation } from "@/hooks";
import { GamesListResponse } from "@/interface";
import { formattingRating } from "@/utils/formattingRating";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

type GameItemProps = {
  game: GamesListResponse;
  isFavorite?: boolean;
};

export const GameItem = ({ isFavorite = false, game }: GameItemProps) => {
  const route = useRouter();
  const { mutateAsync } = useFavoriteMutation(game.id);

  const handleDeleteFavorite = () => {
    mutateAsync();
  };

  return (
    <Pressable
      className="w-full h-44 rounded-lg"
      onPress={() => route.navigate({ pathname: "details/[id]", params: game })}
    >
      <Image
        source={{ uri: game.background_image }}
        className=" w-full h-full rounded-lg opacity-40 absolute"
      />

      {isFavorite && (
        <Pressable
          onPress={handleDeleteFavorite}
          className="w-12 h-12 rounded-full bg-red-600 items-center justify-center absolute top-2 right-3 z-20 "
        >
          <MaterialIcons name="delete-outline" size={30} color="#fff" />
        </Pressable>
      )}

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
  );
};
