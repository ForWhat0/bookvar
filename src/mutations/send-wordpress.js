import gql from "graphql-tag";

export const SendWordpress = gql`
  mutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
    }
  }
`;
