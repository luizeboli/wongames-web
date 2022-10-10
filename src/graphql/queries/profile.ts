import { gql } from '@apollo/client';

export const QueryProfileMe = gql`
  query QueryProfileMe {
    me {
      id
      username
      email
    }
  }
`;
