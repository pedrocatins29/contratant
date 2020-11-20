import { ApolloServer } from "apollo-server-express";
import { userType } from "./typeDefs/userType";
import { queryType } from "./typeDefs/Query";
import { userResolver } from "./resolvers/userResolver";

export const apolloServer = new ApolloServer({
  playground: true,
  introspection: true,
  typeDefs: [userType, queryType],
  resolvers: [userResolver],
});
