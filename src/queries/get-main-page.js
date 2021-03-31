import gql from "graphql-tag";
export const GET_MAIN_PAGE_CONTENT = gql`
  query GET_MAIN_PAGE_CONTENT($pageUri: ID!) {
    page(id: $pageUri, idType: URI) {
      title
      content
      mainFields {
        listPartners {
          logo {
            sourceUrl
          }
        }
        productList {
          ... on Post {
            databaseId
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
          }
        }
        sliderLessonsVr {
          name
          text
          url
        }
        sliderLessonsAr {
          name
          text
          url
        }
        titleAr
        textAr
        titleVr
        textVr
        imgLessonVr {
          sourceUrl
        }
        linkLessonVr
        titleLessonVr
        imgLessonAr {
          sourceUrl
        }
        linkLessonAr
        titleLessonAr
      }
    }
  }
`;
