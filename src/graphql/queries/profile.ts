import { gql } from '@apollo/client';

export const QueryProfileMe = gql`
  query QueryProfileMe($identifier: ID!) {
    usersPermissionsUser(id: $$identifier) {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`;
