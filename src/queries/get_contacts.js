import { gql } from "@apollo/client";
import { siteInfoFragment } from "./fragments/site-info";

const GET_CONTACTS = gql`
  query($fragmentUri: ID!) {
     ${siteInfoFragment}
  }
`;

export default GET_CONTACTS;
