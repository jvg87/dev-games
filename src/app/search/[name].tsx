import { GameList, HeaderPage, Loading } from "@/components";
import { useGamesByNameData } from "@/hooks";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import { Text, View } from "react-native";

const Search = () => {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { data: game, isLoading } = useGamesByNameData(name);

  if (isLoading) {
    return <Loading />;
  }

  if (game?.length === 0) {
    return (
      <View className="flex-1 bg-blue-950 px-4 pt-20">
        <HeaderPage name="Search" />
        <Text className="text-white mx-4 mt-2">
          We didn't find a game with that name...
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-blue-950 px-4 pt-20">
      <HeaderPage name="Search" />
      {game && <GameList games={game} hasTitle={false} />}
    </View>
  );
};

export default Search;
