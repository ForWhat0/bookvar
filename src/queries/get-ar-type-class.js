import gql from "graphql-tag";
export const GET_AR_TYPE_CLASS = gql`
  query GET_AR_TYPE_CLASS {
    classes: videosAR(where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        title
        databaseId
      }
    }
    videosAR(where: { orderby: { field: TITLE, order: ASC } }, first: 1) {
      nodes {
        databaseId
        VideoField {
          flexibleContent {
            ... on VideoAR_Videofield_FlexibleContent_BlockLesson {
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
  }
`;
