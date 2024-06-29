import { CategoryResponse } from "@/interface";
import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const baseUrl = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const fetchAllCategories = async () => {
  const response = await baseUrl.get<CategoryResponse>(
    `/genres?key=${API_KEY}`
  );

  return response.data.results;
};

export const api = {
  fetchAllCategories,
};
