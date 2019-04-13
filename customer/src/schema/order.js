import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    orders: [Order!]!
    order(orderno: String!): Order
    ordersByCustno(custno: String!): [ Order ]
  }


  type Order {
    orderno: String!
    orderdescription: String!
    orderdate: String!
    orderamount: String!
    orderstatus: String!
    custno: String!
  }
`;