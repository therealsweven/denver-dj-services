const { AuthenticationError } = require("apollo-server-express");
const { Inquiry } = require("../models/Inquiry");

const resolvers = {
  Query: {},
  Mutation: {
    createInquiry: async (parent, userInput) => {
      const inquiry = await Inquiry.create(userInput);
      return inquiry;
    },
  },
};
module.exports = resolvers;
