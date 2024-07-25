import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

const fetchFavorites = async () => {
  try {
    const response = await AsyncStorage.getItem("@saveDevGame");
    const data = response ? JSON.parse(response) : [];
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useAllFavoritesData = () => {
  const query = useQuery({
    queryKey: ["favorites"],
    queryFn: fetchFavorites,
  });

  return query;
};
