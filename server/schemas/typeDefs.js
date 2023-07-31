const { gql } = require("apollo-server-express");

// go back and look at queries for education and experience - not necessary or is?
// unfollowEntity should reference Entity or User model?
// removeEntity should reference Entity model...?

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
    user: Client
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
    adminLogin(email: String!, password: String!): Admin
  }
`;

module.exports = typeDefs;
