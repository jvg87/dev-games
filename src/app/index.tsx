import { Header, Input } from "@/components";
import { View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 px-4 pt-20 bg-blue-950">
      <View className="mb-5">
        <Header />
      </View>
      <View className="mb-6">
        <Input />
      </View>
    </View>
  );
};

export default Home;
