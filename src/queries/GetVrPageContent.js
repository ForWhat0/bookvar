import gql from "graphql-tag";
export const GET_VR_PAGE_CONTENT = gql`
  query GET_VR_PAGE_CONTENT($pageUri: ID!) {
    page(id: $pageUri, idType: URI) {
      VrField {
        imgVideo {
          sourceUrl
        }
        linkVideo
        titleVideo
        sliderLessons {
          textLesson
          titleLesson
        }
        listBenefits {
          titleItem
          textItem
          imgItem {
            sourceUrl
          }
        }
      }
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;
