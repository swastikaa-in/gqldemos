import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    customers: [Customer!]!
    customer(custno: String!): Customer
  }


  type Customer {
    custno: ID!
    fname: String!
    lname: String!
    email: String!
  }
`;