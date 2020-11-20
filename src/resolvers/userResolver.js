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
};
