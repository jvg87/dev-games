import { useLocalSearchParams } from "expo-router";
import { FlatList, Modal, ScrollView, Text, View } from "react-native";

import { Button, HeaderDetail, Loading, ModalItem } from "@/components";
import { useGameDetailData } from "@/hooks";
import { GamesListResponse } from "@/interface";
import { formattingRating } from "@/utils/formattingRating";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const Detail = () => {
  const { id } = useLocalSearchParams<Pick<GamesListResponse, "id">>();
  const { data: game, isLoading } = useGameDetailData(id);
  const [showModal, setShowModal] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView className="flex-1 pt-20   bg-blue-950">
      {game && <HeaderDetail game={game} />}

      <View className="px-4 mb-6">
        <View className="gap-1 flex-row mb-1">
          <MaterialIcons name="star" size={20} color="#FABB1E" />
          <Text className="text-white">
            {game && formattingRating(game?.metacritic)}/10
          </Text>
        </View>
        <Text className="text-white font-bold text-xl">{game?.name}</Text>
      </View>

      <View className="px-4 mb-6">
        <Text className="text-white text-lg font-semibold mb-3">Genres</Text>
        <FlatList
          data={game?.genres}
          renderItem={({ item }) => (
            <View className="bg-gray-500 p-2 rounded-lg justify-center items-center">
              <Text className="text-white font-bold">{item.name}</Text>
            </View>
          )}
          horizontal
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

      <View className="px-4 mb-6">
        <Text className="text-white text-lg font-semibold mb-3">
          Description
        </Text>
        <Text numberOfLines={6} className="text-white mb-2">
          {game?.description}
        </Text>
        <Button onPress={() => setShowModal(true)} />
      </View>

      <View className="px-4 mb-6 ">
        <Text className="text-white text-lg font-semibold mb-3">Platforms</Text>
        <FlatList
          data={game?.platforms}
          renderItem={({ item }) => (
            <View className="bg-blue-900 p-2  rounded-lg justify-center items-center">
              <Text className="text-white font-bold">{item.platform.name}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

      <View className="px-4 mb-6 pb-20">
        <Text className="text-white text-lg font-semibold mb-3">Stores</Text>
        <FlatList
          data={game?.stores}
          renderItem={({ item }) => (
            <View className="bg-blue-900 p-2  rounded-lg justify-center items-center">
              <Text className="text-white font-bold">{item.store.name}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

      <Modal animationType="slide" transparent visible={showModal}>
        <ModalItem
          description={game?.description}
          closeModal={() => setShowModal(!showModal)}
        />
      </Modal>
    </ScrollView>
  );
};

export default Detail;
