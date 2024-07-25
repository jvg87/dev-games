import { GameList, HeaderPage, Loading } from "@/components";
import { useAllFavoritesData } from "@/hooks";
import { View } from "react-native";

const Favorites = () => {
  const { data, isLoading } = useAllFavoritesData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 px-4 pt-20 pb-8 bg-blue-950">
      <HeaderPage name="Favorites" />
      {data && <GameList games={data} hasTitle={false} isFavorite />}
    </View>
  );
};

export default Favorites;
