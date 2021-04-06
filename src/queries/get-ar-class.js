import gql from "graphql-tag";
export const GET_AR_CLASS = gql`
  query GET_AR_CLASS($classId: ID!) {
    videoAR(id: $classId, idType: DATABASE_ID) {
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
`;
