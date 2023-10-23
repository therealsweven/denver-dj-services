import { gql } from "@apollo/client";

const CREATE_INQUIRY = gql`
  mutation Mutation(
    $name: String!
    $email: String!
    $message: String!
    $phone: String
    $dateOfEvent: String
    $package: String
    $commMethod: String
    $responded: Boolean
    $active: Boolean
  ) {
    createInquiry(
      name: $name
      email: $email
      message: $message
      phone: $phone
      dateOfEvent: $dateOfEvent
      package: $package
      commMethod: $commMethod
      responded: $responded
      active: $active
    ) {
      _id
      active
      commMethod
      date
      email
      message
      name
      package
      phone
      responded
    }
  }
`;
const DELETE_INQUIRY = gql`
  mutation DeleteInquiry($inquiryId: ID!) {
    deleteInquiry(inquiryId: $inquiryId) {
      _id
    }
  }
`;
const ADMIN_LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      _id
      email
      firstName
      lastName
      password
    }
  }
`;
const MARK_RESPONDED = gql`
  mutation MarkResponded($inquiryId: ID!) {
    markResponded(inquiryId: $inquiryId) {
      _id
      active
    }
  }
`;
const CREATE_ADMIN = gql`
  mutation CreateAdmin(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createAdmin(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
    }
  }
`;
const CREATE_CLIENT = gql`
  mutation CreateClient(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createClient(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
    }
  }
`;
const CLIENT_LOGIN = gql`
  mutation ClientLogin($email: String!, $password: String!) {
    clientLogin(email: $email, password: $password) {
      token
      client {
        _id
      }
    }
  }
`;

export {
  CREATE_INQUIRY,
  DELETE_INQUIRY,
  ADMIN_LOGIN,
  MARK_RESPONDED,
  CREATE_CLIENT,
  CREATE_ADMIN,
  CLIENT_LOGIN,
};
