const { User, Birb } = require('../models');
const { jwtToken, authError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },

    birb: async (_, { birbId}) => {
      return Birb.findOne({ _id: birbId});
    },

    user: async (_, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (_, { username, password }) => {
      const user = await User.create({ username, password });
      const token = jwtToken(user);

      return { token };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username, email });

      if (!user) {
        throw authError
      }

      const correctPw = await username.isCorrectPassword(password);

      if (!correctPw) {
        throw authError
      }

      const token = jwtToken(user);
      return { token };
    },
  },
};

module.exports = resolvers;
