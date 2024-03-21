const { User } = require('../models');
const { jwtToken, authError } = require('../utils/auth');

const resolvers = {
    Query: {
        profile: async () => {
            return User.find();
        },

        profile: async (_parent, { userId }) => {
            return User.findOne({ _id: userId});
        },
    },
    Mutation: {
        addUser: async (parent, {name, email, password}) => {
            const user = await User.create({ name, email, password });
            const token = jwtToken(user);

            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ _id: userId });

            if (!userId) {
                throw authError
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw authError
            }

            const jwt = jwtToken(email)
        }
    }
}