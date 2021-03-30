import { gql } from "@apollo/client";

export const GET_DEVICE_BY_ID_AND_FIRST_TWO_DEVICE = gql`
  query($id: ID!, $language: LanguageCodeFilterEnum) {
    post(id: $id, idType: DATABASE_ID) {
      ProductField {
        productPrice
        oldPrice
        img1 {
          sourceUrl
        }
        img2 {
          sourceUrl
        }
        productExistence
        flexibleContent {
          ... on Post_Productfield_FlexibleContent_FlexibleContent {
            title
            listOption {
              itemOption2
              itemOption1
            }
          }
        }
      }
      title
      databaseId
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    posts(
      where: {
        language: $language
        orderby: { field: DATE, order: DESC }
        offsetPagination: { size: 2, offset: 0 }
      }
    ) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        ProductField {
          productPrice
          oldPrice
        }
        databaseId
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
