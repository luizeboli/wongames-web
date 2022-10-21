import { parseQueryStringToFilters, parseQueryStringToSidebar } from '.';

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' },
];

const queryString = {
  price_lte: 100,
  platforms: ['windows', 'linux'],
  developers: 'Rockstar Games',
  sort: 'price:asc',
};

describe('parseQueryStringToWhere', () => {
  it('should parse query string to where format', () => {
    const parsedQuery = parseQueryStringToFilters({ queryString, filterItems });

    expect(parsedQuery).toStrictEqual({
      price_lte: 100,
      platforms: { name: { in: ['windows', 'linux'] } },
      developers: { name: { in: 'Rockstar Games' } },
    });
  });
});

describe('parseQueryStringToFilter', () => {
  it('should parse query string to filter values format', () => {
    const parsedQuery = parseQueryStringToSidebar({ queryString, filterItems });

    expect(parsedQuery).toStrictEqual({
      price_lte: 100,
      platforms: ['windows', 'linux'],
      developers: ['Rockstar Games'],
      sort: 'price:asc',
    });
  });
});
