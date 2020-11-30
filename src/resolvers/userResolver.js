const { userModel } = require("../models/UserModel");

export const userResolver = {
  Query: {
    async user(_, args) {
      return userModel.findUserByParam("id", args.id);
    },
    async users() {
      return userModel.findUsers();
    },
  },
  Mutation: {
    async createUser(_, args) {
      try {
        await userModel.createUser(
          args.nome,
          args.username,
          args.email,
          args.senha,
          args.photo,
          args.description,
          args.cellphone,
          args.Localidade_id
        );
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
