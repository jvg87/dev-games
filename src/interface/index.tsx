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
  rating: number;
  background_image: string;
};

export type GamesResponse = {
  results: GamesListResponse[];
};
