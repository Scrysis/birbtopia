const { User, Birb } = require("../models");
const { jwtToken, authError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },

    birb: async (_, { birbId }) => {
      return Birb.findOne({ _id: birbId });
    },

    user: async (_, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (_, args, context) => {
      try {
        if (!context.user) throw new Error("Unathenticated");
        const user = await User.findById(context.user._id);
        return user;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    addUser: async (_, { username, password, email }) => {
      const user = await User.create({ username, password, email });
      const token = jwtToken(user);

      return { username: user.username, token };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw authError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw authError;
      }

      const token = jwtToken(user);
      return { username: user.username, token };
    },
    addBirb: async (_, {userId}) => {
      const birb = await Birb.create({birbId});
      const user = await User.findOneAndUpdate(
        { username },
        { $push: { birbArray: birbId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
