const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'beepboop';
const expiration = '24h';

module.exports = {
    authError: new GraphQLError('Authentication failed. Try again later', {
        extensions: {
            code: 'nope',
        },
    }),
    jwtToken: function ({ email, username, _id}) {
        const info = {email, username, _id};
        return jwt.sign({ data: info}, secret, { expires: expiration });
    },
};