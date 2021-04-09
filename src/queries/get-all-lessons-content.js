import gql from "graphql-tag";
import {siteInfoFragment} from "./fragments/site-info";

export const GET_ALL_LESSONS_CONTENT = gql`
  query GET_ALL_LESSONS_CONTENT($pageUri: ID!, $fragmentUri: ID!, $language: LanguageCodeFilterEnum)  {
   ${siteInfoFragment}
    page(id: $pageUri, idType: URI) {
    content
  }
    classes: videosAR(where: {language: $language, orderby: { field: TITLE, order: ASC } }) {
      nodes {
        title
        databaseId
      }
    }
    videosAR(where: {language: $language, orderby: { field: TITLE, order: ASC } }, first: 1) {
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
