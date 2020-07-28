import { sortAlphabetic } from '../src/data.js';

describe('sortAlphabetic()', () => {
  const mockCharactersList = [
    {
      name: 'Rick'
    },
    {
      name: 'A Rick'
    },
    {
      name: 'Morty'
    }];

  it('Should return the list without modification if order param is empty', () => {
    const sortedList = sortAlphabetic('', mockCharactersList);
    expect(sortedList).toEqual(mockCharactersList);
  });

  it('Should return the list ordered from a to z', () => {
    const sortedList = sortAlphabetic('a-z', mockCharactersList);
    expect(sortedList).toEqual([
      {
        name: 'A Rick'
      },
      {
        name: 'Morty'
      },
      {
        name: 'Rick'
      }
    ]);
  });

  it('Should return the list ordered from z to a', () => {
    const sortedList = sortAlphabetic('z-a', mockCharactersList);
    expect(sortedList).toEqual([
      {
        name: 'Rick'
      },
      {
        name: 'Morty'
      },
      {
        name: 'A Rick'
      }
    ]);
  });

  it('Should return the list without modification when there are equal names', () => {
    const equalMockCharactersList = [
      {
        name: 'Rick'
      },
      {
        name: 'Summer'
      },
      {
        name: 'Morty'
      },
      {
        name: 'Summer'
      }
    ]

    const sortedList = sortAlphabetic('a-z', equalMockCharactersList);
    expect(sortedList).toEqual([
      {
        name: 'Morty'
      },
      {
        name: 'Rick'
      },
      {
        name: 'Summer'
      },
      {
        name: 'Summer'
      }
    ]);
  });

});
