export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationItem {
  id: number;
  name: string;
  type: string;
  dimension: string;
}
export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[]; // Массив персонажей, который нам и нужен
}
export type PropsParam = {
  params: Promise<{
    id: string;
  }>;
};