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

export { CREATE_INQUIRY, ADMIN_LOGIN };
