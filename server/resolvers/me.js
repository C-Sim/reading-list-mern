const { ApolloError } = require("apollo-server");
const { User } = require("../models");

const me = async (_, args, { user }) => {
  const foundUser = await User.findOne({
    $or: [{ _id: user._id }],
  });

  if (!foundUser) {
    return new ApolloError("Cannot find a user with this id!");
  }

  return foundUser;
};

module.exports = me;
