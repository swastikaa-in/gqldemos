import { gql } from 'apollo-server-express';

export default gql`

extend type Mutation {
    signIn(login: String!, password: String!): Token!
  }
  type Token {
    token: String!
  }
 
`;