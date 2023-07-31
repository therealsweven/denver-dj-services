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
