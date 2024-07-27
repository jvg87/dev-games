import { api } from "@/service/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const getAllGames = async ({ pageParam }: { pageParam: number }) => {
  const response = await api.fetchAllGames({ pageParam });
  return response;
};

export const useAllGamesData = () => {
  const query = useInfiniteQuery({
    queryKey: ["games"],
    queryFn: getAllGames,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
  return query;
};
