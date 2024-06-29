import { CategoryList, Header, Input, Loading } from "@/components";
import { useAllCategoriesData } from "@/hooks";
import { View } from "react-native";

const Home = () => {
  const { data: categories, isLoading: isLoadingCategories } =
    useAllCategoriesData();

  if (isLoadingCategories) {
    return <Loading />;
  }

  return (
    <View className="flex-1 px-4 pt-20 bg-blue-950">
      <View className="mb-5">
        <Header />
      </View>

      <View className="mb-6">
        <Input />
      </View>

      <View className="mb-6">
        {categories && <CategoryList categories={categories} />}
      </View>
    </View>
  );
};

export default Home;
