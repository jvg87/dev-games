import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const getGamesByCategory = async (id?: string) => {
  const response = await api.fetchGamesByCategory(id);
  return response;
};

export const useGamesByCategory = (id?: string) => {
  const query = useQuery({
    queryKey: ["gamesByCategory", id],
    queryFn: () => getGamesByCategory(id),
  });
  return query;
};
