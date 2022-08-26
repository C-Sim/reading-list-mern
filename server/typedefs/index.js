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
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

type SignUpResponse {
 token: String!
 user: User
}

input SignUpInput {
    username: String!
    email: String!
    password: String!
}

mutation {
    signup(input: SignUpInput!
        
): SignUpResponse
}`;

module.exports = typeDefs;
