import { gql } from "@apollo/client";

export const QUERY_INQUIRIES = gql`
  query Inquiries {
    inquiries {
      _id
      active
      commMethod
      date
      email
      name
      message
      package
      phone
      responded
      createdAt
    }
  }
`;

export const QUERY_CLIENTS = gql`
  query Query {
    clients {
      _id
      city
      email
      firstName
      lastName
      password
      phone
      state
      street
      zip
    }
  }
`;

export const QUERY_ME = gql`
  query Me($clientId: ID!) {
    me(clientId: $clientId) {
      _id
      city
      email
      firstName
      invoices {
        _id
        active
        amount
        dateOfEvent
        discount
        notes
        package
      }
      lastName
      password
      phone
      state
      street
      zip
    }
  }
`;
