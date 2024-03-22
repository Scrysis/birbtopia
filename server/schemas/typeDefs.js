const typeDefs = `
  type Tech {
    _id: ID!
    name: String!
  }

  type User {
    username: String!
    email: String
    birbArray: [Birb]
  }
type Birb {
  thing: Boolean
}
  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    profiles: User
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
