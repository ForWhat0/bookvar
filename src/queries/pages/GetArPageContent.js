import gql from "graphql-tag";
import { siteInfoFragment } from "../fragments/site-info";
export const GET_AR_PAGE_CONTENT = gql`
  query GET_AR_PAGE_CONTENT($pageUri: ID!, $fragmentUri: ID!)  {
   ${siteInfoFragment}
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
    page(id: $pageUri, idType: URI) {
      content
      ArField {
        sliderLessons {
          name
          text
        }
        arLinkAndroidApp
        arLinkIphoneApp
        arLogoApp {
          sourceUrl
        }
        arTextApp
        imgLeftApp {
          sourceUrl
        }
        titleVideo
        linkVideo
        imgVideo {
          sourceUrl
        }
        androidListModel {
          androidItemModel
          androidItemManufactory
        }
        ipadListModel {
          itemModel
        }
        iphoneListModel {
          itemModel
        }
        ipodListModel {
          itemModel
        }
      }
    }
  }
`;
