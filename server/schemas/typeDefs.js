const typeDefs = `
  type User {
    username: String!
    email: String!
    birbArray: [Birb]
  }

  type Birb {
    thing: Boolean
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
  }
`;

module.exports = typeDefs;
