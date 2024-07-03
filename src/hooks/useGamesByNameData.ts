import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const getGamesByName = async (name?: string) => {
  const response = await api.fetchGamesByName(name);
  return response;
};

export const useGamesByNameData = (name?: string) => {
  const query = useQuery({
    queryKey: ["gamesByName", name],
    queryFn: () => getGamesByName(name),
  });
  return query;
};
