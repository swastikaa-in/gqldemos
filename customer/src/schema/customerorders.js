import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    getCustomers: [ CustomerOrder ]
  }


  type CustomerOrder {
   orders: [ Order ]
   customer: Customer
  }
`;