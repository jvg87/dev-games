import "@/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="category/[id]" />
        <Stack.Screen name="details/[id]" />
        <Stack.Screen name="search/[name]" />
        <Stack.Screen name="favorites" />
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
