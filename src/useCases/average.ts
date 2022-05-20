import { Pokemon, AverageResponse } from '../interfaces/interfaces';
export function averageCalculator(pokemons: Pokemon[]): AverageResponse {
  const heightAV =
    pokemons.reduce((total, next) => total + next.height, 0) / pokemons.length;

  const weightV =
    pokemons.reduce((total, next) => total + next.weight, 0) / pokemons.length;

  return { height: heightAV, weight: weightV };
}
