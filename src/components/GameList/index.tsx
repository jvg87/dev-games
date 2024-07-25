import { GamesListResponse } from "@/interface";
import { FlatList, Text } from "react-native";
import { GameItem } from "../GameItem";

type GameListProps = {
  games: GamesListResponse[];
  hasTitle: boolean;
  isFavorite?: boolean;
};

export const GameList = ({
  isFavorite = false,
  hasTitle,
  games,
}: GameListProps) => {
  return (
    <FlatList
      ListHeaderComponent={() =>
        hasTitle && (
          <Text className="text-white font-bold text-xl">Trending games</Text>
        )
      }
      keyExtractor={(item) => item.id}
      data={games}
      renderItem={({ item }) => (
        <GameItem game={item} isFavorite={isFavorite} />
      )}
      contentContainerStyle={{ gap: 12 }}
    />
  );
};
