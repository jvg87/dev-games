import { CategoryListResponse } from "@/interface";
import { FlatList } from "react-native";
import { CategoryItem } from "../CategoryItem";

type CategoryListProps = {
  categories: CategoryListResponse[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={categories}
      renderItem={({ item }) => <CategoryItem category={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 6 }}
    />
  );
};
