import { CategoryListResponse } from "@/interface";
import { Pressable, Text } from "react-native";

type CategoryItemProps = {
  category: CategoryListResponse;
};

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Pressable className=" h-11 rounded-lg p-3  bg-gray-500 mr-3">
      <Text className="text-white">{category.name}</Text>
    </Pressable>
  );
};
