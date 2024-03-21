const { User } = require('../models');
const { jwtToken, authError } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return User.find();
    },

    profile: async (_parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const profile = await User.create({ name, email, password });
      const token = jwtToken(username);

      return { token, profile };
    },
    login: async (_, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw authError
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw authError
      }

      const token = jwtToken(profile);
      return { token, profile };
    },

    addSkill: async (parent, { profileId, skill }) => {
      return User.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { profileId }) => {
      return User.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;
