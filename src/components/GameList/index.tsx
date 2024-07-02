import { GamesListResponse } from "@/interface";
import { FlatList, Text } from "react-native";
import { GameItem } from "../GameItem";

type GameListProps = {
  games: GamesListResponse[];
  hasTitle: boolean;
};

export const GameList = ({ hasTitle, games }: GameListProps) => {
  return (
    <FlatList
      ListHeaderComponent={() =>
        hasTitle && (
          <Text className="text-white font-bold text-xl">Trending games</Text>
        )
      }
      keyExtractor={(item) => item.id}
      data={games}
      renderItem={({ item }) => <GameItem game={item} />}
      contentContainerStyle={{ gap: 12 }}
    />
  );
};
