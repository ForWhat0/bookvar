import gql from "graphql-tag";
export const GET_AR_PAGE_CONTENT = gql`
  query GET_AR_PAGE_CONTENT($pageUri: ID!) {
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
