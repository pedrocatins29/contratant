import { gql } from "apollo-server";

export const mutationType = gql`
  type Mutation {
    createUser(
      nome: String!
      username: String!
      email: String!
      senha: String!
      photo: String!
      description: String!
      cellphone: String!
      Localidade_id: ID!
    ): Boolean

    login(email: String!, password: String!): LoginResponse
    logout: Boolean
  }
`;
