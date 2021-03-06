import { gql } from 'apollo-server-express';

export default gql`

directive @hasRole(role:String) on FIELD | FIELD_DEFINITION
  
  extend type Query {
    users: [User!]  
    user(id: ID!): User @hasRole(role:"ADMIN")
    myself: User 
  }
extend type Mutation {
    signUp(
      username: String!
      email: String! 
      password: String!
    ): Token!
    signIn(login: String!, password: String!): Token!
  }
  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String! 
    email: String  
    messages: [Message!] 
  }
`;