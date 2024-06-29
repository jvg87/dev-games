import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const getAllCategories = async () => {
  const response = await api.fetchAllCategories();
  return response;
};

export const useAllCategoriesData = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  return query;
};
