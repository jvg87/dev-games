import { CategoryList, GameList, Header, Input, Loading } from "@/components";
import { useAllCategoriesData, useAllGamesData } from "@/hooks";
import { GamesListResponse } from "@/interface";
import { View } from "react-native";

const Home = () => {
  const { data: categories, isLoading: isLoadingCategories } =
    useAllCategoriesData();

  const {
    data,
    isLoading: isLoadingGames,
    hasNextPage,
    fetchNextPage,
  } = useAllGamesData();

  if (isLoadingCategories || isLoadingGames) {
    return <Loading />;
  }

  const games = data?.pages.reduce<GamesListResponse[]>((acc, page) => {
    if (page) {
      return [...acc, ...page];
    }
    return acc;
  }, []);

  const onReachEnd = () => {
    if (hasNextPage && !isLoadingGames) {
      fetchNextPage();
    }
  };

  return (
    <View className="flex-1 px-4 pt-20 pb-8 bg-blue-950">
      <View className="mb-5">
        <Header />
      </View>

      <View className="mb-6">
        <Input />
      </View>

      <View className="mb-6">
        {categories && <CategoryList categories={categories} />}
      </View>

      <View>
        {games && <GameList games={games} hasTitle onReachEnd={onReachEnd} />}
      </View>
    </View>
  );
};

export default Home;
