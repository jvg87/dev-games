import { ActivityIndicator, View } from "react-native";

import { colors } from "@/styles/colors";

export const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-950">
      <ActivityIndicator size={40} color={colors.red[600]} />
    </View>
  );
};
