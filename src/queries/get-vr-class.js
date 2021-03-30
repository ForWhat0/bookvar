import gql from "graphql-tag";
export const GET_VR_CLASS = gql`
  query GET_VR_CLASS($classId: ID!) {
    videoVR(id: $classId, idType: DATABASE_ID) {
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
`;
