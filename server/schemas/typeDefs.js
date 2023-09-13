const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Client {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    password: String
    street: String
    city: String
    state: String
    zip: String
  }

  type Admin {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Inquiry {
    _id: ID!
    name: String
    email: String
    phone: String
    message: String
    date: String
    package: String
    commMethod: String
    responded: Boolean
    active: Boolean
    createdAt: String
  }

  type Auth {
    token: ID!
    client: Client
  }

  type Query {
    inquiries: [Inquiry]
  }

  type Mutation {
    createInquiry(
      name: String!
      email: String!
      phone: String
      message: String!
      dateOfEvent: String
      package: String
      commMethod: String
      responded: Boolean
      active: Boolean
    ): Inquiry
    createAdmin(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Admin
    createClient(
      firstName: String!
      lastName: String!
      email: String!
      phone: String
      password: String!
      street: String
      city: String
      state: String
      zip: String
    ): Client
    adminLogin(email: String!, password: String!): Admin
    clientLogin(email: String!, password: String!): Auth

    markResponded(inquiryId: ID!): Inquiry
  }
`;

module.exports = typeDefs;
