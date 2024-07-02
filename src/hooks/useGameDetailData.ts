import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const getDetailGame = async (id?: string) => {
  const response = await api.fetchGamesById(id);
  return response;
};

export const useGameDetailData = (id?: string) => {
  const query = useQuery({
    queryKey: ["detail", id],
    queryFn: () => getDetailGame(id),
  });
  return query;
};
