import { averageCalculator } from './average';
import { Pokemon, AverageResponse } from '../interfaces/interfaces';

const mockResponse: AverageResponse = {
  weight: 100,
  height: 10
};

const pokemonsInputArray: Pokemon[] = [
  { weight: 100, height: 10, name: 'charmander' },
  { weight: 100, height: 10, name: 'pikachu' }
];

describe('Calculate average', () => {
  test('should return average object', () => {
    const result = averageCalculator(pokemonsInputArray);
    expect(result).toStrictEqual(mockResponse);
  });
});
