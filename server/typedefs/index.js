const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int!
    savedBooks: [Book]
  }

  type AuthResponse {
    token: String!
    user: User
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SaveBookInput {
    bookId: String!
    authors: [String]
    description: String
    image: String
    title: String!
    link: String
  }

  type Query {
    me: User!
  }

  type Mutation {
    signup(input: SignUpInput!): AuthResponse
    login(input: LoginInput!): AuthResponse
    saveBook(input: SaveBookInput!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
