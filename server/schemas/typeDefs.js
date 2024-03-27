// const { gql } = require("apollo-server");
const typeDefs = `
  type Birb {
    thing: Boolean
  }

  type User {
    username: String!
    email: String!
    birbArray: [Birb]
  }

  type Auth {
    token: ID!
    username: ID!
  }

  type Query {
    user: User
    birb: Birb
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addBirb(userId: ID!): ID
  }
`;

module.exports = typeDefs;
