import { ParsedUrlQueryInput } from 'querystring';

import { ItemProps } from 'components/ExploreSidebar';

type FilterItem = { filterInput?: string } & Pick<ItemProps, 'type' | 'name'>;

type ParseArgs = {
  queryString: ParsedUrlQueryInput;
  filterItems?: FilterItem[];
};

/*
 * Receives a query string and parse it to GraphQL filters query format
 */
export const parseQueryStringToFilters = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key);
      const isCheckbox = item?.type === 'checkbox';
      const isNumber = item?.name === 'price';

      if (isCheckbox) {
        obj[key] = { name: { in: queryString[key] } };
        return;
      }

      if (item?.filterInput) {
        obj[key] = { [item.filterInput]: isNumber ? Number(queryString[key]) : queryString[key] };
        return;
      }

      obj[key] = queryString[key];
    });

  return obj;
};

/*
 * Receives a query string and parse it to filter format to use in explore page
 */
export const parseQueryStringToSidebar = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key);
    const isCheckbox = item?.type === 'checkbox';
    const isArray = Array.isArray(queryString[key]);

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key];
  });

  return obj;
};
