import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type ModalProps = {
  description?: string;
  closeModal: () => void;
};

export const ModalItem = ({ description, closeModal }: ModalProps) => {
  return (
    <View className=" flex-1 pt-20 px-4 bg-blue-900">
      <View className="flex-row items-center gap-20">
        <Pressable
          className="w-12 h-12 rounded-full bg-blue-950 items-center justify-center  "
          onPress={closeModal}
        >
          <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
        </Pressable>
        <Text className=" font-semibold text-2xl text-white">Description</Text>
      </View>
      <Text className="text-white mt-6">{description}</Text>
    </View>
  );
};
