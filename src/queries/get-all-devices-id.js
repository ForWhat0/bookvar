import { gql } from "@apollo/client";

export const GET_ALL_ID_FROM_DEVICES = gql`
  query {
    posts(first: 500) {
      nodes {
        databaseId
      }
    }
  }
`;
