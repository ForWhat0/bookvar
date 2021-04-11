import gql from "graphql-tag";
export const GET_VR_TYPE_CLASS = gql`
  query GET_VR_TYPE_CLASS($language: LanguageCodeFilterEnum) {
    classes: videosVR(where: {language: $language, orderby: { field: TITLE, order: ASC } }) {
      nodes {
        title
        databaseId
      }
    }
    videosVR(where: {language: $language, orderby: { field: TITLE, order: ASC } }, first: 1) {
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
  }
`;
