import { GamesListResponse } from "@/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteFavorite = async (id: string) => {
  try {
    const response = await AsyncStorage.getItem("@saveDevGame");

    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter(
      (item: GamesListResponse) => item.id !== id
    );

    await AsyncStorage.setItem("@saveDevGame", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const useFavoriteMutation = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
  });

  return mutation;
};
