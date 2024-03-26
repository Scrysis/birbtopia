const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "beepboop";
const expiration = "24h";

module.exports = {
  authError: new GraphQLError("Authentication failed. Try again later", {
    extensions: {
      code: "nope",
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    // console.log("token", token);

    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },
  jwtToken: function ({ email, username, _id }) {
    const info = { email, username, _id };
    return jwt.sign({ data: info }, secret, { expiresIn: expiration });
  },
};
