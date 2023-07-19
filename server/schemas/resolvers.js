const { AuthenticationError } = require("apollo-server-express");
const { Inquiry } = require("../models/Inquiry");
const { sendConfirmation, sendInfoToMe } = require("../utils/helpers");

const resolvers = {
  Query: {},
  Mutation: {
    createInquiry: async (parent, userInput) => {
      console.log(userInput);
      if (userInput.dateOfEvent === "") {
        userInput.dateOfEvent = "none specified";
      }
      if (userInput.package === "" || !userInput.package) {
        userInput.package = "none specified";
      }
      console.log(userInput);
      userInput.active = true;
      const inquiry = await Inquiry.create(userInput);
      const email1 = await sendConfirmation(userInput);
      const email2 = await sendInfoToMe(userInput);
      if (email2.response) {
        console.log("Email Sent", email1, email2);
        return inquiry;
      }

      return inquiry;
    },
  },
};
module.exports = resolvers;
