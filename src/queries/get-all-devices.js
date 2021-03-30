import { gql } from "@apollo/client";

export const GET_ALL_DEVICES = gql`
  query GET_ALL_DEVICES($size: Int, $offset: Int, $language: LanguageCodeFilterEnum) {
  posts(where: {language: $language, offsetPagination: {size: $size, offset: $offset}}) {
    nodes {
      title
      databaseId
      featuredImage {
        node {
          sourceUrl
        }
      }
      ProductField {
        oldPrice
        productPrice
      }
    }
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
