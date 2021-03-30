import gql from "graphql-tag";

export const GET_DEVICES_COUNT = gql`
  query GET_DEVICES_COUNT {
    posts {
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
    }
  }
`;

