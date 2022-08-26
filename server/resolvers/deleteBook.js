const { ApolloError } = require("apollo-server");
const { User } = require("../models");

const deleteBook = async (_, { bookId }, { user }) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: user._id },
    { $pull: { deletedBooks: { bookId } } },
    { new: true }
  );
  if (!updatedUser) {
    return ApolloError("Couldn't find user with this id!");
  }
  return updatedUser;
};

module.exports = deleteBook;
