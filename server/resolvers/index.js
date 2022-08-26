const me = require("./me");
const signup = require("./signup");
const login = require("./login");
const saveBook = require("./saveBook");
const deleteBook = require("./deleteBook");

const resolvers = {
  Query: {
    me,
  },
  Mutation: {
    signup,
    login,
    saveBook,
    deleteBook,
  },
};

module.exports = resolvers;
