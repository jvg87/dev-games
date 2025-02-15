export type CategoryListResponse = {
  id: string;
  name: string;
};

export type CategoryResponse = {
  results: CategoryListResponse[];
};

export type GamesListResponse = {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
};

export type GamesResponse = {
  results: GamesListResponse[];
};

export type GameResponse = {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  background_image_additional: string;
  description: string;
  genres: {
    id: string;
    name: string;
  }[];
  platforms: {
    platform: {
      id: string;
      name: string;
    };
  }[];
  stores: {
    store: {
      id: string;
      name: string;
    };
  }[];
};
