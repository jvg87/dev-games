import { CategoryResponse, GamesResponse } from "@/interface";
import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const baseUrl = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const fetchAllCategories = async () => {
  try {
    const response = await baseUrl.get<CategoryResponse>(
      `/genres?key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchAllGames = async () => {
  try {
    const response = await baseUrl.get<GamesResponse>(
      `/games?page_size=10&key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const api = {
  fetchAllCategories,
  fetchAllGames,
};
