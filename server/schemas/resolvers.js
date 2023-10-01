const { AuthenticationError } = require("apollo-server-express");
const { Inquiry } = require("../models/Inquiry");
const { Admin } = require("../models/Admin");
const { Client } = require("../models/Client");
const {
  sendConfirmation,
  sendInfoToMe,
  sendClientPortalLogin,
} = require("../utils/helpers");
const { v4: uuidv4 } = require("uuid");
const { signToken } = require("../utils/auth");

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
      userInput.responded = false;
      const inquiry = await Inquiry.create(userInput);
      const email1 = await sendConfirmation(userInput);
      const email2 = await sendInfoToMe(userInput);
      if (email2.response) {
        console.log("Email Sent", email1, email2);
        return inquiry;
      }

      return inquiry;
    },
    createAdmin: async (parent, userInput) => {
      console.log(userInput);
      const admin = await Admin.create(userInput);
      return admin;
    },
    createClient: async (parent, userInput) => {
      const tempPW = uuidv4();
      userInput.password = tempPW;
      console.log(userInput);
      const client = await Client.create(userInput);
      const email = await sendClientPortalLogin(userInput);
      if (email.response) {
        console.log("Email Sent", email);
        return client;
      }
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
    clientLogin: async (parent, { email, password }) => {
      const clientData = await Client.findOne({ email });
      console.log(clientData);
      if (!clientData) {
        throw new AuthenticationError(
          "No client account with that information found!"
        );
      }

      const correctPw = await clientData.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(clientData);
      return { token, clientData };
    },
    markResponded: async (parent, inquiryId) => {
      console.log(inquiryId);
      const inquiry = await Inquiry.findOneAndUpdate(
        { _id: inquiryId },
        { responded: true },
        { new: true }
      );
      console.log(inquiry);
    },
  },
};
module.exports = resolvers;
