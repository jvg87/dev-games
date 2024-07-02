import { CategoryListResponse } from "@/interface";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

type CategoryItemProps = {
  category: CategoryListResponse;
};

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={{ pathname: "category/[id]", params: category }} asChild>
      <Pressable className=" h-11 rounded-lg p-3  bg-gray-500 mr-3">
        <Text className="text-white">{category.name}</Text>
      </Pressable>
    </Link>
  );
};
