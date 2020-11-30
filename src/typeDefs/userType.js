import { gql } from "apollo-server";

export const userType = gql`
  type User {
    id: ID
    nome: String
    username: String
    email: String
    photo: String
    description: String
    cellphone: String
    prestador: Boolean
    date_created: String
  }
  type LoginResponse {
    accessToken: String
    user: User
  }
`;
// localidade: Localidade
