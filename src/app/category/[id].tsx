import { GameList, HeaderPage, Loading } from "@/components";
import { useGamesByCategoryData } from "@/hooks";
import { CategoryListResponse } from "@/interface";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const Category = () => {
  const { id, name } = useLocalSearchParams<CategoryListResponse>();
  const { data: games, isLoading } = useGamesByCategoryData(id);

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
