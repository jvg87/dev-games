import { GameResponse } from "@/interface";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert, FlatList, Image, Pressable, View } from "react-native";

type HeaderDetailProps = {
  game: GameResponse;
};

export const HeaderDetail = ({ game }: HeaderDetailProps) => {
  const route = useRouter();

  const images = [game?.background_image, game?.background_image_additional];

  const handleFavorite = async (game: GameResponse) => {
    try {
      const response = await AsyncStorage.getItem("@saveDevGame");

      const previousData: GameResponse[] = response ? JSON.parse(response) : [];

      const gameAlreadyExists = previousData.find(
        (item: GameResponse) => item.id === game.id
      );
      if (gameAlreadyExists) {
        Alert.alert("OPS!", "Este jogo já foi salvo!");
        return;
      }

      const data = [...previousData, game];

      await AsyncStorage.setItem("@saveDevGame", JSON.stringify(data));
      Alert.alert("Salvo com sucesso!", "Jogo adicionado aos favoritos!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="w-full h-80 mb-10">
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} className="w-96 h-80 " />
        )}
        horizontal
      />
      <Pressable
        className="w-12 h-12 rounded-full bg-blue-950 items-center justify-center absolute top-10 left-3 "
        onPress={() => route.back()}
      >
        <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
      </Pressable>
      <Pressable
        onPress={() => handleFavorite(game)}
        className="w-12 h-12 rounded-full bg-blue-950 items-center justify-center absolute top-10 right-3 "
      >
        <MaterialIcons name="bookmark-outline" size={30} color="#ffffff" />
      </Pressable>
    </View>
  );
};
