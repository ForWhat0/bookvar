import gql from "graphql-tag";
export const GET_VR_PAGE_CONTENT = gql`
  query GET_VR_PAGE_CONTENT($pageUri: ID!) {
    classes: videosVR(where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        title
        databaseId
      }
    }
    videosVR(where: { orderby: { field: TITLE, order: ASC } }, first: 1) {
      nodes {
        databaseId
        VideoField {
          flexibleContent {
            ... on VideoVR_Videofield_FlexibleContent_BlockLesson {
              nameLesson
              listVideoLesson {
                text
                name
                url
              }
              iconLesson {
                sourceUrl
              }
            }
          }
        }
      }
    }
    page(id: $pageUri, idType: URI) {
      title
      content
      VrField {
        productVr {
          ... on Post {
            id
            databaseId
            title
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
        }
        sliderLessons {
          name
          text
        }
        imgVideo {
          sourceUrl
        }
        linkVideo
        titleVideo
        listBenefits {
          titleItem
          textItem
          imgItem {
            sourceUrl
          }
        }
      }
    }
  }
`;
