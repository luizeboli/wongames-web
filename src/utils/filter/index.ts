import { ParsedUrlQueryInput } from 'querystring';

import { ItemProps } from 'components/ExploreSidebar';

type ParseArgs = {
  queryString: ParsedUrlQueryInput;
  filterItems?: Pick<ItemProps, 'type' | 'name'>[];
};

/*
 * Receives a query string and parse it to GraphQL where format
 */
export const parseQueryStringToWhere = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key);
      const isCheckbox = item?.type === 'checkbox';

      obj[key] = !isCheckbox ? queryString[key] : { name_contains: queryString[key] };
    });

  return obj;
};

/*
 * Receives a query string and parse it to filter format to use in explore page
 */
export const parseQueryStringToFilter = ({ queryString, filterItems }: ParseArgs) => {
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
