const { AuthenticationError } = require("apollo-server-express");
const { Inquiry } = require("../models/Inquiry");
const { Admin } = require("../models/Admin");
const { sendConfirmation, sendInfoToMe } = require("../utils/helpers");

const resolvers = {
  Query: {
    inquiries: async () => {
      console.log("test");
      const data = await Inquiry.find({ active: true });
      console.log(data);
      return data;
    },
  },
  Mutation: {
    createInquiry: async (parent, userInput) => {
      console.log(userInput);
      if (userInput.dateOfEvent === "") {
        userInput.dateOfEvent = "none specified";
      }
      userInput.date = userInput.dateOfEvent;
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
    adminLogin: async (parent, { email, password }) => {
      const adminData = await Admin.findOne({ email });
      console.log(adminData);
      if (!adminData) {
        throw new AuthenticationError(
          "No admin account with that information found!"
        );
      }

      const correctPw = await adminData.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      return adminData;
    },
  },
};
module.exports = resolvers;
