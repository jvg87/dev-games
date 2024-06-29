import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const getAllGames = async () => {
  const response = await api.fetchAllGames();
  return response;
};

export const useAllGamesData = () => {
  const query = useQuery({
    queryKey: ["games"],
    queryFn: getAllGames,
  });
  return query;
};
