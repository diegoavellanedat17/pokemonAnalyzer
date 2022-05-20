export interface PokemonQueryInput {
  offset: number;
  limit: number;
}

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

export interface AverageResponse {
  weight: number;
  height: number;
}
