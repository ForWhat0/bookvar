import { gql } from "@apollo/client";

const GET_STRUCTURE = gql`
  query(
    $location: MenuLocationEnum
    $contactsUri: ID!
    $language: LanguageCodeFilterEnum
  ) {
    menuItems(where: { location: $location }) {
      nodes {
        key: id
        parentId
        path
        title: label
        url
      }
    }

    structure(where: { language: $language }) {
      nodes {
        structureField {
          department {
            numberDepartment
            nameDepartment
            position
            nameLast
            numberPhoneDepartment
            gmailDepartment
          }
        }
      }
    }

    contacts: page(id: $contactsUri, idType: URI) {
      databaseId
      contactsFields {
        adress
        facebookLink
        gmail
        iconSite {
          sourceUrl
        }
        titleSite
        descrSite
        telegramLink
        phoneNumber
        mapsLink
        mapsImg {
          sourceUrl
        }
      }
    }
  }
`;

export default GET_STRUCTURE;
