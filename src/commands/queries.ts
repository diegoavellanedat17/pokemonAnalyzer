import {
  PokemonQueryInput,
  Pokemon,
  AverageResponse
} from '../interfaces/interfaces';

import { averageCalculator } from '../useCases/average';
import axios from 'axios';

const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';

export async function fetchPokemons(
  parameters: PokemonQueryInput
): Promise<AverageResponse | null> {
  const { offset, limit } = parameters;
  const queryResponse = await axios.get(
    `${pokemonURL}?limit=${limit}&offset=${offset}`
  );

  if (queryResponse.data) {
    const pokemons = queryResponse.data.results;
    let pokemonsArray: Pokemon[] = await Promise.all(
      pokemons.map(async (pokemon: any) => {
        return await pokemonData(pokemon.url);
      })
    );
    return averageCalculator(pokemonsArray);
  }
  return null;
}

export async function pokemonData(url: string): Promise<Pokemon> {
  const pokemonResponse = await axios.get(url);
  const { name, weight, height } = pokemonResponse.data;
  const pokemon: Pokemon = { name, weight, height };
  return pokemon;
}
