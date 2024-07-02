import { GameList, HeaderPage, Loading } from "@/components";
import { useGamesByCategory } from "@/hooks";
import { CategoryListResponse } from "@/interface";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

const Category = () => {
  const { id, name } = useLocalSearchParams<CategoryListResponse>();
  const route = useRouter();
  const { data: games, isLoading } = useGamesByCategory(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 px-4 pt-20 pb-8 bg-blue-950">
      {name && <HeaderPage name={name} />}
      {games && <GameList games={games} hasTitle={false} />}
    </View>
  );
};

export default Category;
