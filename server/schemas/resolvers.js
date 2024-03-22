const { User } = require('../models');
const { jwtToken, authError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },

    user: async (_, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (_, { username, password }) => {
      const user = await User.create({ username, password });
      const token = jwtToken(user);

      return { token, profile };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username, email });

      if (!user) {
        throw authError
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw authError
      }

      const token = jwtToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;
