import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps = Pick<PressableProps, "onPress">;

export const Button = ({ onPress }: ButtonProps) => {
  return (
    <Pressable
      className="w-full justify-center items-center bg-blue-500 py-2 rounded-md"
      onPress={onPress}
    >
      <Text className="text-white">Read full description</Text>
    </Pressable>
  );
};
