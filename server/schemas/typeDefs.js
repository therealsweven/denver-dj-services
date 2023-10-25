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

  type Invoice {
    _id: ID!
    client: Client
    amount: Int
    discount: Int
    dateOfEvent: String
    package: String
    notes: String
    active: Boolean
  }

  type Auth {
    token: ID!
    client: Client
  }

  type Query {
    inquiries: [Inquiry]
    clients: [Client]
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
    createInvoice(
      client: String!
      amount: Int!
      discount: Int
      dateOfEvent: String!
      package: String
      notes: String
      active: Boolean
    ): Invoice
    adminLogin(email: String!, password: String!): Admin
    clientLogin(email: String!, password: String!): Auth
    markResponded(inquiryId: ID!): Inquiry
    deleteInquiry(inquiryId: ID!): Inquiry
  }
`;

module.exports = typeDefs;
