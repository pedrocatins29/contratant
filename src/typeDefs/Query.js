import { gql } from "apollo-server";

export const queryType = gql`
  type Query {
    users: [User]
    user(id: ID): User
  }
`;
